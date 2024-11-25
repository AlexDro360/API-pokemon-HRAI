import { Component, Inject, OnInit, AfterViewInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common'
import { FormsModule } from '@angular/forms';
import {
  MatDialog,
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { NgModel } from '@angular/forms';
import { PokemonEditarComponent } from '../pokemon-editar/pokemon-editar.component';
import { PokemonEliminarComponent } from '../pokemon-eliminar/pokemon-eliminar.component';
import { PokemonInformacionComponent } from '../pokemon-informacion/pokemon-informacion.component';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'avatar', 'acciones'];
  dataSource = new MatTableDataSource<any>([]);
  pokemons: any[] = [];
  pokemon: any = {};
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  readonly dialog = inject(MatDialog);

  constructor(private pokemonservice: PokemonService) {
  }

  getPokemonImg(url: string): Observable<string> {
    return this.pokemonservice.getPok(url).pipe(
      map(data => data.sprites.other['official-artwork'].front_default)
    );
  }

  ngOnInit(): void {
    this.pokemonservice.getPokemons().subscribe(data => {
      this.pokemons = data.results.map((pokemon: any, index: number) => (
        {
          id: index + 1,
          name: pokemon.name,
          url: pokemon.url,
          avatar: '',
          stats: {},
          abilities: {}
        }
      ))

      this.pokemons.forEach(pokemon => {
        this.pokemonservice.getPok(pokemon.url).subscribe(data => {
          pokemon.avatar = data.sprites.other['official-artwork'].front_default;
          pokemon.stats = data.stats;
          pokemon.abilities = data.abilities;
        })
      })

      this.dataSource.data = [...this.pokemons]

    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openVer(pokemon: any) {
    const dialogRef = this.dialog.open(PokemonInformacionComponent, {
      width: "400px",
      data: pokemon,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  openEditar(pokemon: any) {
    const dialogRef = this.dialog.open(PokemonEditarComponent, {
      width: "400px",
      data: pokemon,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.data.indexOf(pokemon);
        if (index !== -1) {
          this.dataSource.data[index] = result;
          this.dataSource.data = [...this.dataSource.data];
        }
      }
    });
  }

  eliminarPokemon(pokemon: any) {
    const dialogRef = this.dialog.open(PokemonEliminarComponent, {
      data: pokemon
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.data.indexOf(pokemon);
        this.dataSource.data.splice(index, 1);
        this.dataSource.data = this.dataSource.data;
      }
    });

  }
}
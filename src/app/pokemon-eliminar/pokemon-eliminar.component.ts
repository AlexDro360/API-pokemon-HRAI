import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'pokemon-eliminar',
  templateUrl: './pokemon-eliminar.component.html',
  styleUrl: './pokemon-eliminar.component.css',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonEliminarComponent {
  readonly dialogRef = inject(MatDialogRef<PokemonEliminarComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
}
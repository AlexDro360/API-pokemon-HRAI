import { Component, OnInit} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenav} from '@angular/material/sidenav';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { UserService } from '../services/user.service';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule,MatSidenav,MatIconModule,MatSidenavModule,BarraLateralComponent, MatMenuModule, MatButtonModule, PokemonListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  user: any = {};
  constructor(private userservice: UserService){}

  cerrarSesion(){
    this.userservice.cerrarSesion();
  }
  
  ngOnInit(): void {
    this.userservice.getUser().subscribe(data => {
      this.user = data;
    })
  }

  
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import {MatSidenavModule} from '@angular/material/sidenav';
import { UserService } from '../services/user.service';

/**
 * @title Basic divider
 */
@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css',
  standalone: true,
  imports: [MatListModule, MatDividerModule, MatButtonModule, MatMenuModule, MatSidenavModule],
  
})
export class BarraLateralComponent implements OnInit{
  user: any = {};

  constructor(private userservice :UserService){}

  cerrarSesion(){
    this.userservice.cerrarSesion();
  }

  ngOnInit(): void {
    this.userservice.getUser().subscribe(data => {
      this.user = data;
    })
  }
}

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/** @title Form field with prefix & suffix */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [CommonModule,FormsModule ,MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,MatCardModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent{
  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private userservice: UserService,private router: Router, private cdr: ChangeDetectorRef){}

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  log(): void{
    this.userservice.login(this.email, this.password).subscribe({
      next: ()=> {this.router.navigate(['/home']),
        this.loginError = false;
      },
      error: (err) => {console.error(err),
        this.loginError = true;
        this.cdr.markForCheck();
      }
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { isPartiallyEmittedExpression } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/auth/login';
  private token = 'TokenAutenticacion';
  constructor(private http: HttpClient, private router: Router) { }
  
  login(email: string, password: string):Observable<any>{
    return this.http.post<any>(this.apiUrl, {email, password}).pipe(
      tap(response =>{
        if(response.access_token){
          this.setToken(response.access_token);
        }
      })
    )
  }

  private setToken(token: string): void{
    localStorage.setItem(this.token, token);
  }

  cerrarSesion():void{
    localStorage.removeItem(this.token);
    this.router.navigate(['/login']);
  }

  private getToken(): string | null{
    return localStorage.getItem(this.token);
  }

  getUser():Observable<any>{
    const token = this.getToken();
    return this.http.get<any>("https://api.escuelajs.co/api/v1/auth/profile",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  isAuthenticated(): boolean{
    const token = this.getToken();
    if(!token){
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp = 1000;
    return Date.now() < exp;
    
  }
  
}

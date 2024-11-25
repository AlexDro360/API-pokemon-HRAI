import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0"
  private token = 'TokenAutenticacion';
  constructor(private http: HttpClient, private router: Router) { }
  
  getPokemons():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  getPok(url:string):Observable<any>{
    return this.http.get<any>(url);
  }
}

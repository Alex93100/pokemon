import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiPokemonService {
  apiUrl: string = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http : HttpClient) { }

  getPokemon(name: string) {
    return this.http.get(`${this.apiUrl}/${name}`);
  }

  getListPokemon(limit: number, offset: number,) {
    return this.http.get(`${this.apiUrl}/?limit=${limit}&offset=${offset}`);
  }
}

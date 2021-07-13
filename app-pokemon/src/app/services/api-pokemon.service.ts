import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiPokemonList, IApiPokemonDetails } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiPokemonService {
  apiUrl: string = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http : HttpClient) { }

  getPokemon(name: string) : Observable<IApiPokemonDetails>{
    return this.http.get<IApiPokemonDetails>(`${this.apiUrl}/${name}`);
  }

  getListPokemon(limit: number, offset: number,) : Observable<IApiPokemonList> {
    return this.http.get<IApiPokemonList>(`${this.apiUrl}/?limit=${limit}&offset=${offset}`);
  }
}

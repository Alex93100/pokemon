import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../../services/api-pokemon.service';
import { IApiPokemon, IApiPokemonList } from '../../models/pokemon.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  name!: string;
  optionLimit!: string;
  nbrsOfPokemonsPerPage = 20;
  imageUrl!: string;
  page = 0;
  pokemonList$!: Observable<IApiPokemonList>;
  pokemons$!: Observable<Array<IApiPokemon>>;
  totalPokemon!: number;

  constructor(private ApiPokemonService: ApiPokemonService) { }

  ngOnInit() {
    this.pokemonList$ = this.ApiPokemonService.getListPokemon(this.nbrsOfPokemonsPerPage, 0)
    this.pokemons$ = this.pokemonList$.pipe(
      map((pokemonList: IApiPokemonList) => pokemonList.results)
    )
    // this.getPokemon();
  }

  searchPokemonByName() {
    this.ApiPokemonService.getPokemon(this.name).subscribe((data: any )=> {
      console.log(data);
      this.imageUrl = data.sprites?.front_default;
    })
  }

  getPokemonDetails$() : {

  }

  // getPokemon() {
  //   this.ApiPokemonService.getListPokemon( this.nbrsOfPokemonsPerPage, this.page + 0)
  //   .subscribe((pokemons: any) => {
  //     this.totalPokemon = pokemons.count;
  //     console.log('pokemons :', this.pokemons);
  //     pokemons.results.forEach((result: any) => {
  //       this.ApiPokemonService.getPokemon(result.name)
  //       .subscribe((pokemon: any) => {
  //         console.log('pokemon details :', pokemon);
  //         this.pokemons.push(pokemon);
  //       })
  //     });
  //   })
  // }
}

import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../../services/api-pokemon.service';

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
  page = 1;
  pokemons: any[] = [];
  totalPokemon!: number;

  constructor(private ApiPokemonService: ApiPokemonService) { }

  ngOnInit() {
    this.getPokemon();
  }

  searchPokemonByName() {
    this.ApiPokemonService.getPokemon(this.name).subscribe((data: any )=> {
      console.log(data);
      this.imageUrl = data.sprites?.front_default;
    })
  }

  getPokemon() {
    this.ApiPokemonService.getListPokemon( this.nbrsOfPokemonsPerPage, this.page + 0)
    .subscribe((pokemons: any) => {
      this.totalPokemon = pokemons.count;
      console.log(this.pokemons);
      console.log(this.totalPokemon);
      pokemons.results.forEach((result: any) => {
        this.ApiPokemonService.getPokemon(result.name)
        .subscribe((pokemon: any) => {
          console.log('pokemon details :', pokemon);
          this.pokemons.push(pokemon);
        })
      });
    })
  }
}

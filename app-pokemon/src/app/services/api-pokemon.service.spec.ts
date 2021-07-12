/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiPokemonService } from './api-pokemon.service';

describe('Service: ApiPokemon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiPokemonService]
    });
  });

  it('should ...', inject([ApiPokemonService], (service: ApiPokemonService) => {
    expect(service).toBeTruthy();
  }));
});

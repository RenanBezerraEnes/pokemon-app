import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  getPokemons(): Pokemon[] {
    return [
      {
        id: 1,
        name: 'Pikachu',
        type: 'Eletric',
        isCool: false,
        isStylish: true,
      },
      {
        id: 2,
        name: 'Squirtle',
        type: 'Water',
        isCool: true,
        isStylish: true,
      },
      {
        id: 3,
        name: 'Charmander',
        type: 'Fire',
        isCool: true,
        isStylish: false,
      },
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [
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

  constructor() {}

  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id !== event.id;
    });
  }

  ngOnInit(): void {}
}

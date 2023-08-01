import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  isCool: boolean;
  isStylish: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'basket of baby beavers';
  imgSrc: string =
    'https://images.foxtv.com/static.fox9.com/www.fox9.com/content/uploads/2022/06/932/524/baby-beavers-edit1.jpg?ve=1&tl=1';
  favoriteAnimal: string = 'turtle';
  pokemonName: string = '';
  pokepoke: string = '';

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

  handleClick(value: any) {
    console.log(value);
  }

  handleChange(event: any) {
    this.pokepoke = event.target.value;
  }
}

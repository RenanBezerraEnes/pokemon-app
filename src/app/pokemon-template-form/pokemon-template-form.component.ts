import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon-service.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css'],
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: Pokemon;
  constructor(private pokemonService: PokemonService) {}

  toggleIsCool(object: any) {
    console.log(object);
    this.pokemon.isCool = !this.pokemon.isCool;
  }

  ngOnInit() {
    this.pokemonService.getPokemonWithId(1).subscribe((data: Pokemon) => {
      this.pokemon = data;
    });
  }
}
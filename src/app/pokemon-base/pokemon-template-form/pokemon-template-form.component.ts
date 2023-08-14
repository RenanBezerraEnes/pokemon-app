import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service.service';
import { Pokemon, PokemonType } from '../../models/pokemon';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css'],
})
export class PokemonTemplateFormComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonType: PokemonType[] = [
    {
      key: 0,
      value: 'Fire',
    },
    {
      key: 1,
      value: 'Water',
    },
  ];
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  toggleIsCool(object: any) {
    console.log(object);
    this.pokemon.isCool = !this.pokemon.isCool;
  }

  handleSubmit(object: any) {
    console.log('POKEMON BODY: ', object);
  }

  ngOnInit() {
    this.pokemon = {} as Pokemon;
    this.route.params.subscribe((data: Params) => {
      return this.pokemonService
        .getPokemonWithId(data['id'])
        .subscribe((data: Pokemon) => {
          this.pokemon = data;
        });
    });
  }

  back(): void {
    this.router.navigate(['/pokemon']);
  }
}

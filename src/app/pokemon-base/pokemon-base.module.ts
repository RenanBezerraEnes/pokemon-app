import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../services/pokemon-service.service';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonDetailComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [PokemonListComponent, PokemonDetailComponent],
  providers: [PokemonService],
})
export class PokemonBaseModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../services/pokemon-service.service';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'pokemon', component: PokemonListComponent },
      { path: ':id', component: PokemonTemplateFormComponent },
    ],
  },
];

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonTemplateFormComponent,
  ],
  providers: [PokemonService],
})
export class PokemonBaseModule {}

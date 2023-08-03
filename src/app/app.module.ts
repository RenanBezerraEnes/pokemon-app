import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PokemonTemplateFormComponent],
  imports: [BrowserModule, PokemonBaseModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

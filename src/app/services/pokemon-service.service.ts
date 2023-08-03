import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const pokemonApi = 'http://localhost:3000/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonWithId(id: number) {
    return this.http.get<Pokemon>(`${pokemonApi}/1`);
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(pokemonApi);
  }
}

import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class PokemonService {
  private pokemonsUrl = 'api/pokemons';
  
  
  
  constructor(private http: HttpClient) { }

    // Retourne tous les pokemons
    getPokemons() : Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonsUrl);
    }
    // retourne le pokemon avec l'id en parametre
    getPokemon(id: number): Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${id}`
        return  this.http.get<Pokemon>(url);
        }
    
    updatePokemon(pokemon: Pokemon) : Observable<Pokemon> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      }; 
        return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httpOptions)       
    }     

    deletePokemon(id: number) : Observable<Pokemon> {
      const url = `${this.pokemonsUrl}/${id}`;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      }; 
      return this.http.delete<Pokemon>(url, httpOptions)
      
      
    }

    // Retourne la liste des types des Pokémons
    getPokemonTypes(): Array<string> {
        return [
          'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }
}


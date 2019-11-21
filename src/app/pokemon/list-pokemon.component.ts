import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { InMemoryDataService } from './in-memory-data.service';

@Component({
	selector: 'list-pokemon',
	templateUrl: './app/pokemon/list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
​
	pokemons: Pokemon[] = null;
	pokemon: Pokemon  = null;
​
	constructor(private router: Router, private _pokemonService: PokemonService) { }
​
	ngOnInit(): void {
		// this.pokemons = this._pokemonService.getPokemons();

		this._pokemonService.getPokemons().subscribe(x => this.pokemons = x)//souscrit au service de connexion à la DB contenu dans GetPokemons() dans pokemon-service.ts
	}
​
	selectPokemon(pokemon: Pokemon): void {
		console.log('Vous avez selectionné ' + pokemon.name);
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}
​
}
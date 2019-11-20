import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { _ParseAST } from '@angular/compiler';
import { PokemonService } from './pokemon.service';


@Component({
    selector: 'edit-pokemon',
    templateUrl: './app/pokemon/edit-pokemon.component.html'
})
export class EditPokemonComponent implements OnInit {
    pokemon: Pokemon = null;

    constructor(private route: ActivatedRoute, private router: Router, private _pokemonService: PokemonService) { }

    ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');// + indique que c'est un Number
        // recup un pokémon par son ID (boucle FOR, IF)
        this.pokemon =this._pokemonService.getPokemon(id);
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { _ParseAST } from '@angular/compiler';
import { PokemonService } from './pokemon.service';
​
@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemon/detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
​
    pokemons: Pokemon[] = null;
    pokemon: Pokemon = null;
​
    constructor(private route: ActivatedRoute, private router: Router, private _pokemonService: PokemonService) { }    
​
    ngOnInit(): void {
        //Recupérer liste de pokemons
        this._pokemonService.getPokemons()
            .subscribe(x => this.pokemons = x);

        let id = +this.route.snapshot.paramMap.get('id');// + indique que c'est un Number
        // recup un pokémon par son ID (boucle FOR, IF)
        this._pokemonService.getPokemon(id)
            .subscribe(x => this.pokemon = x);
        /*
        * Peut estre remplacé par un filtre:    
        this.pokemons.filter(x => x.id == id)[0];     
        */
    }
​
    goBack(): void {
        //Méthode qui permet de revenir sur la page /pokemons
        //this.router
        this.router.navigate(['/pokemon/all']);
    }

    goEdit(pokemon: Pokemon): void {
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

    goDelete(id: number): void {
        this._pokemonService.deletePokemon(id)
            .subscribe(() => this.goBack());
        
    }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_pokemon_1 = require("./mock-pokemon");
var PokemonService = /** @class */ (function () {
    function PokemonService() {
    }
    // Retourne tous les pokemons
    PokemonService.prototype.getPokemons = function () {
        return mock_pokemon_1.POKEMONS;
    };
    PokemonService.prototype.getPokemon = function (id) {
        var pokemons = this.getPokemons();
        for (var index = 0; index < pokemons.length; index++) {
            if (id === pokemons[index].id) {
                return pokemons[index];
            }
        }
    };
    // Retourne la liste des types des Pokémons
    PokemonService.prototype.getPokemonTypes = function () {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    };
    PokemonService = __decorate([
        core_1.Injectable()
    ], PokemonService);
    return PokemonService;
}());
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map
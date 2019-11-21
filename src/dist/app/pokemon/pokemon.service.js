"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/common/http");
var PokemonService = /** @class */ (function () {
    function PokemonService(http) {
        this.http = http;
        this.pokemonsUrl = 'api/pokemons';
    }
    // Retourne tous les pokemons
    PokemonService.prototype.getPokemons = function () {
        return this.http.get(this.pokemonsUrl);
    };
    // retourne le pokemon avec l'id en parametre
    PokemonService.prototype.getPokemon = function (id) {
        var url = this.pokemonsUrl + "/" + id;
        return this.http.get(url);
    };
    PokemonService.prototype.updatePokemon = function (pokemon) {
        var httpOptions = {
            headers: new http_2.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(this.pokemonsUrl, pokemon, httpOptions);
    };
    PokemonService.prototype.deletePokemon = function (id) {
        var url = this.pokemonsUrl + "/" + id;
        var httpOptions = {
            headers: new http_2.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.delete(url, httpOptions);
    };
    // Retourne la liste des types des Pokémons
    PokemonService.prototype.getPokemonTypes = function () {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    };
    PokemonService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PokemonService);
    return PokemonService;
}());
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map
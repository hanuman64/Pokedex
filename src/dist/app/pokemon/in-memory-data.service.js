"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_pokemon_1 = require("./mock-pokemon");
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var pokemons = mock_pokemon_1.POKEMONS;
        return { pokemons: pokemons };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//GET api/pokemons
//Get api/pokemons/1
//Put api/pokemons/1
//Get api/pokemons?name=^epx    (? => type=)
//# sourceMappingURL=in-memory-data.service.js.map
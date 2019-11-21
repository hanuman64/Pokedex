import { InMemoryDbService } from "angular-in-memory-web-api";
import { POKEMONS } from "./mock-pokemon";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let pokemons = POKEMONS;
        return { pokemons };
    }
}

//GET api/pokemons
//Get api/pokemons/1
//Put api/pokemons/1
//Get api/pokemons?name=^epx    (? => type=)
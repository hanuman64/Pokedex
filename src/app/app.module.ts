import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BorderCardDirective } from './pokemon/border-card.directive';
import { PokemonTypeColorPipe } from './pokemon/pokemon-type-color.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ListPokemonComponent } from './pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';



@NgModule({
    imports: [
        BrowserModule,
        PokemonModule,
        AppRoutingModule
    ],
    declarations: [
        // Components + Directives + Pipes
        AppComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
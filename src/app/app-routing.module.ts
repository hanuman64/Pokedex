import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found.component";

 
const appRoutes: Routes = [
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent } // ** signifie erreurs
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
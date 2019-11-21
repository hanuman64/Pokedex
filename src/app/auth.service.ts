import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { delay, tap } from "rxjs/operators";

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;    // utilisateur connecté
    redirectUrl: string; // ou rediriger l'user après connection

    // Méthode de connection
    login(name: string, password: string) : Observable<boolean> {
        // Appel au service d'authentification
        let isLoggedIn = (name === 'admin'  && password === 'admin');

        return of(true).pipe(
            delay(1000),
            tap(() => this.isLoggedIn = isLoggedIn)
        ); 
    }

    logout() : void {
        this.isLoggedIn = false;
    }
}
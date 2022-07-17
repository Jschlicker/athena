import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class AuthGuard implements CanActivate {
    constructor(private readonly auth: AuthService, private router: Router) {}
    canActivate(): Observable<boolean> {
        return this.auth.isAuthenticated$.pipe(
            tap((isAutorized: boolean) => {
                if (!isAutorized) {
                    this.router.navigate(["login"]).then(() => false);
                }
                return true;
            })
        );
    }
}

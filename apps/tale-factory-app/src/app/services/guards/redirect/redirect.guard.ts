import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class RedirectGuard implements CanActivate {
    canActivate(
        route: ActivatedRouteSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        window.location.href = route.data["url"];
        return true;
    }
}

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { Content, SERVICES } from "./content/services.content";

@Component({
    selector: "tf-app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
    public SERVICES: Content[] = SERVICES;
    constructor(public auth: AuthService, public router: Router) {}

    redirect(): void {
        this.router.navigateByUrl("github").then(() => false);
    }
}

import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
    selector: "tf-app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
    constructor(public auth: AuthService) {}
}

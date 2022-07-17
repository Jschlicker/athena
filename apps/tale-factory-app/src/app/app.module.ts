import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AuthModule } from "@auth0/auth0-angular";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
    declarations: [AppComponent, LoginComponent, HomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule.forRoot({
            domain: environment.domain,
            clientId: environment.client_id,
        }),
        ButtonModule,
        CardModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

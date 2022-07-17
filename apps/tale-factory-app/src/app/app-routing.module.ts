import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./services/guards/auth/auth.guard";
import { RedirectGuard } from "./services/guards/redirect/redirect.guard";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home",
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "github",
        canActivate: [RedirectGuard],
        component: RedirectGuard,
        data: {
            url: "https://github.com/Jschlicker/tale-factory-monorepo",
        },
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            onSameUrlNavigation: "reload",
            scrollPositionRestoration: "enabled",
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}

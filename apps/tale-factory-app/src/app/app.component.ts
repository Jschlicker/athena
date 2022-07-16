import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";

@Component({
    selector: "tale-factory-monorepo-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    constructor(private primeNgCofnig: PrimeNGConfig) {}
    title = "tale-factory-app";

    ngOnInit() {
        this.primeNgCofnig.ripple = true;
    }
}

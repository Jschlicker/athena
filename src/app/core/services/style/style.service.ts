import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StyleService {
  public currentStyle: string;

  constructor() {}

  toggle() {
    this.currentStyle =
      this.currentStyle === "dark-theme" ? "light-theme" : "dark-theme";
  }
}

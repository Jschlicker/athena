import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class NavbarStateService {
  private sidenav: MatSidenav;

  toggle(): void {
    this.sidenav.toggle();
  }

  setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }
}

import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavbarStateService } from '../../core/services/navbar-state/navbar-state.service';
import { StyleService } from '../../core/services/style/style.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav')
  public sidenav: MatSidenav;

  mobileQuery: MediaQueryList;

  constructor(
    private navbarState: NavbarStateService,
    public styleService: StyleService,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 30em)');
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.navbarState.setSidenav(this.sidenav);
  }
}

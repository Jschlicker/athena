import { Component, OnInit } from '@angular/core';
import { NavbarStateService } from '../../core/services/navbar-state/navbar-state.service';
import { StyleService } from '../../core/services/style/style.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    readonly navbarState: NavbarStateService,
    public styleService: StyleService
  ) {}

  ngOnInit(): void {}
}

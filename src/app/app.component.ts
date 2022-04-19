import { Component, OnInit } from '@angular/core';
import { StyleService } from './core/services/style/style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'athena';

  constructor(public styleService: StyleService) {}

  ngOnInit(): void {
    this.styleService.currentStyle = 'light-theme';
  }
}

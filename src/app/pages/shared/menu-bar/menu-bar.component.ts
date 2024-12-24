import { Component } from '@angular/core';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  imports: [
    MenuButtonComponent,
    RouterLink
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

}

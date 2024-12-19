import { Component } from '@angular/core';
import { MenuButtonComponent } from './menu-button/menu-button.component';

@Component({
  selector: 'app-menu-bar',
  imports: [
    MenuButtonComponent
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

}

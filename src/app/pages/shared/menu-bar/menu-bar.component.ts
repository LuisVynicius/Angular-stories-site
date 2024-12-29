import { Component } from '@angular/core';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { RouterLink } from '@angular/router';
import { DefaultButtonComponent } from '../default-button/default-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  imports: [
    MenuButtonComponent,
    DefaultButtonComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  menu: boolean = false;

  switchMenu() {
    this.menu = !this.menu;
  }

}

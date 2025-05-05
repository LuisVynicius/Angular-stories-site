import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './pages/shared/menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    MenuComponent,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Metales';
}

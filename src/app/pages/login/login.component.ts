import { Component } from '@angular/core';
import { RectangleBackgroundComponent } from '../shared/rectangle-background/rectangle-background.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { DefaultButtonComponent } from '../shared/default-button/default-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    RectangleBackgroundComponent,
    InputBoxComponent,
    DefaultButtonComponent,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hasAccount: boolean = true

  switchAccount() {
    this.hasAccount = !this.hasAccount;
  }
}

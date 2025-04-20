import { Component } from '@angular/core';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BackgroundRectangleComponent } from '../shared/background-rectangle/background-rectangle.component';
import { LoginServiceService } from '../../services/login.service';
import { login, register } from '../../shapes/authentication';

@Component({
  selector: 'app-login-page',
  imports: [
    InputComponent,
    ButtonComponent,
    BackgroundRectangleComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  hasAccount: boolean = false;

  username: string = "";
  email: string = "";
  password: string = "";
  validPassword: string = "";

  constructor(
    private http: HttpClient,
    private loginService: LoginServiceService
  ) {

  }

  switchHasAccount() {
    this.hasAccount = !this.hasAccount;

    this.username = "";
    this.email = "";
    this.password = "";
    this.validPassword = "";
  }

  register() {

    if (this.password != this.validPassword) {
      alert("As senhas não batem")
      return;
    }

    const registerEntity: register = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.loginService.register(registerEntity).subscribe({
      next: () => {
        this.switchHasAccount();
      },
      error: (err) => {
        // TODO
      }
    });
    
  }

  login() {
    
    const loginEntity: login = {
      email: this.email,
      password: this.password
    };

    this.loginService.login(loginEntity);

  }
}

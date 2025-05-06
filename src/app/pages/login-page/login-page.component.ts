import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { BackgroundRectangleComponent } from '../shared/background-rectangle/background-rectangle.component';
import { LoginService } from '../../services/login.service';
import { login, register } from '../../shapes/authentication';
import { Router } from '@angular/router';
import { InputComponent } from '../shared/input/input.component';

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
    private loginService: LoginService,
    private router: Router
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

    this.loginService.login(loginEntity).subscribe({
      next: (success) => {
        if (success) {
          this.router.navigate(['/tales']);
        } else {
          alert("Login falhou. Token não recebido.");
        }
      },
      error: (err) => {
        alert("Credenciais inválidas ou erro de conexão.");
      }
    });

  }
}

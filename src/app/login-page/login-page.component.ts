import { Component } from '@angular/core';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [
    InputComponent,
    ButtonComponent,
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

  constructor(private http: HttpClient) {

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

    this.http.post("http://localhost:8080/user/register", {
      "username": this.username,
      "email": this.email,
      "password": this.password
    }).subscribe({
      next: (response) => {
        this.hasAccount = true;
      },
      error: (err) => {
        // TODO erro
        console.error("Deu erro", err);
      }
    });
  }

  login() {
    this.http.post("http://localhost:8080/login", {
      "username": this.email,
      "password": this.password
    }, {observe: 'response'}).subscribe({
      next: (response) => {
        const token: string = response.headers.get("Authorization") || "";
        localStorage.setItem("token", token);
      },
      error: (err) => {
        // TODO
        console.error("Deu erro", err);
      }
    });
  }
}

import { Component } from '@angular/core';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  imports: [
    InputComponent,
    ButtonComponent,
    CommonModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  hasAccount: boolean = false;

  constructor(private http: HttpClient) {

  }

  switchHasAccount() {
    this.hasAccount = !this.hasAccount;
  }

  register() {
    this.http.get("http://localhost:8080", { responseType: 'text' }).subscribe({
      next: (response) => {
        console.log("Deu certo", response);
      },
      error: (err) => {
        console.error("Deu erro", err);
      }
    });
    
    // this.http.post("http://localhost:8080/user/register", {
    //   "username": "usuarioalgumacoisa",
    //   "email": "emaildealgumacoisa@gmail.com",
    //   "password": "senhadealgumacoisa"
    // }).subscribe({
    //   next: (any) => {
    //     console.log("Next");
    //   },
    //   error: (any) => {
    //     console.log("Error");
    //   }
    // })
  }
}

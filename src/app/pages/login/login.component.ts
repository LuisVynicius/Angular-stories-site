import { Component } from '@angular/core';
import { RectangleBackgroundComponent } from '../shared/rectangle-background/rectangle-background.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { DefaultButtonComponent } from '../shared/default-button/default-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../config/environment';

@Component({
  selector: 'app-login',
  imports: [
    RectangleBackgroundComponent,
    InputBoxComponent,
    DefaultButtonComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hasAccount: boolean = true;

  hasAccountMessage: string = "Já possuo uma conta";

  username: string = "";
  email: string = "";
  password: string = "";

  constructor(
    private http: HttpClient
  ) {

  }

  switchAccount() {
    this.hasAccount = !this.hasAccount;

    if (this.hasAccount) {
      this.hasAccountMessage = "Já possuo uma conta"
    } else {
      this.hasAccountMessage = "Não possuo uma conta"
    }

    this.username = "";
    this.password = "";
    this.email = "";
  }

  register() {
    this.http.post(enviroment.apiUrl + "/user/register", {
      "username": this.username,
      "email": this.email,
      "password": this.password
    }).subscribe({
      next: (response) => {
        this.switchAccount();
      },
      error: (err) => {
        console.log(err.message)
      }
    });
  }

  login() {
    this.http.post<{
      Authorization: string
    }>(enviroment.apiUrl + "/login", {
      username: this.username,
      password: this.password
    }, {observe: 'response'}).subscribe({
      next: (data) => {
        const token = data.body?.['Authorization']; 
        console.log("Deu sim " + token);
      },
      error: (err) => {console.log("Deu não")}
    });
  }

}

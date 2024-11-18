import { Component } from '@angular/core';
import { RedirectButtonComponent } from './redirect-button/redirect-button.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RedirectButtonComponent,
    CustomButtonComponent,
    LoginButtonComponent,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hasAccount = false;
  text: string = "Não possuo uma conta";
  
  loggin() {
    console.log("Logging");
  }

  register() {
    console.log("Register");
  }

  switchText() {
    if (this.hasAccount === true) {
      this.text = "Já possuo uma conta";
      this.hasAccount = false;
    }
    else {
      this.text = "Não possuo uma conta"
      this.hasAccount = true;
    }
  }
}

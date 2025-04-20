import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login, register } from '../shapes/authentication';
import { apiUrl } from '../configs/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    private http: HttpClient
  ) { }

  register(register: register): Observable<any> {
    
    return this.http.post(apiUrl + "/user/register", {
      "username": register.username,
      "email": register.email,
      "password": register.password
    });

  }

  login(login: login) {

    this.http.post(apiUrl + "/login", {
      "username": login.email,
      "password": login.password
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

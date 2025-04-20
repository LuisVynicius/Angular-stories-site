import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login, register } from '../shapes/authentication';
import { apiUrl } from '../configs/environment';
import { map, Observable } from 'rxjs';

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

  login(login: login): Observable<boolean> {

    return this.http.post(apiUrl + "/login", {
      "username": login.email,
      "password": login.password
    }, { observe: 'response' }).pipe(
      map(response => {
        const token: string = response.headers.get("Authorization") || "";

        if (token) {
          localStorage.setItem("token", token);
          return true;
        }

        return false;
      })
    );

  }

}

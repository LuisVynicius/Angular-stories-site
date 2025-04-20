import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { apiUrl } from '../configs/environment';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const http = inject(HttpClient);

  const token = localStorage.getItem("token");

  return http.post<boolean>(`${apiUrl}/token/validate`, { token }).pipe(
    map(isValid => {
      return isValid ? true : router.parseUrl('/login');
    }),
    catchError(() => {
      localStorage.removeItem("token");
      console.log("Caiu aqui");
      return of(router.parseUrl('/login'));
    })
  );
};
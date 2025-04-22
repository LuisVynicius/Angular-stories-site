import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../configs/environment';
import { tale, taleView } from '../shapes/tale';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalesService {

  constructor(
    private http: HttpClient
  ) { }

  getTales(): Observable<tale[]> { 
    return this.http.get<tale[]>(`${apiUrl}/tales/all`);
  }

  getTale(name: string): Observable<taleView> {
    return this.http.get<taleView>(`${apiUrl}/tales/${name}`);
  }

}

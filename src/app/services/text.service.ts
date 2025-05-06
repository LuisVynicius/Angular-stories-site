import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../configs/environment';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor(
    private http: HttpClient
  ) { }

  getCorrections(text: string): Observable<string> {
    return this.http.post(`${apiUrl}/ai/check`, { text }, { responseType: 'text' });
  }  

}

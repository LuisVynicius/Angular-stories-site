import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../configs/environment';
import { tale, taleCreate, taleRead, taleView, taleDelete, taleUpdateTale, taleUpdateAll } from '../shapes/tale';
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

  getTalesByUsername(username: string): Observable<tale[]> {
    return this.http.get<tale[]>(`${apiUrl}/tales/all/username/${username}`);
  }

  getTale(name: string): Observable<taleView> {
    return this.http.get<taleView>(`${apiUrl}/tales/name/${name}`);
  }

  getTaleToUpdate(name: string): Observable<taleUpdateAll> {
    const headers = this.getHeaderToken();

    return this.http.get<taleUpdateAll>(
      `${apiUrl}/tales/upset/${name}`,
      { headers }
    );
  }

  getChapter(name: string, chapter: number): Observable<taleRead> {
    return this.http.get<taleRead>(`${apiUrl}/tales/name/${name}/${chapter}`);
  }

  getMyTales(): Observable<tale[]> {
    const headers = this.getHeaderToken();
  
    return this.http.get<tale[]>(`${apiUrl}/tales/my`, { headers });
  }
  
  getMyFavorites(): Observable<tale[]> {
    const headers = this.getHeaderToken();

    return this.http.get<tale[]>(`${apiUrl}/tales/favorites`, { headers });
  }
  
  createTale(tale: taleCreate) {
    const headers = this.getHeaderToken();

    return this.http.post(`${apiUrl}/tales`, tale, { headers } );
  }

  updateTale(tale: taleUpdateTale) {
    const headers = this.getHeaderToken();
    return this.http.put(
      `${apiUrl}/tales`,
      tale,
      {
        headers 
      }
    );
  }

  deleteTale(name: string) {
    const headers = this.getHeaderToken();

    const tale: taleDelete = {
      name: name
    };

    return this.http.delete(
      `${apiUrl}/tales`,
      {
        headers,
        body: tale
      }
    );
  }

  private getHeaderToken() {
    const token: string = localStorage.getItem("token")!;
  
    const headers = new HttpHeaders({
      Authorization: token
    });

    return headers;
  }

  

}

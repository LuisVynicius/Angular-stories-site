import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../configs/environment';
import { chapter, chapterCreate } from '../shapes/tale';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(
    private http: HttpClient
  ) { }

  createChapter(chapter: chapterCreate) {

    return this.http.post(
      `${apiUrl}/chapter`,
      chapter
    );
  }

}

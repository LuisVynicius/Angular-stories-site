import { Component, OnInit } from '@angular/core';
import { RectangleBackgroundComponent } from '../shared/rectangle-background/rectangle-background.component';
import { BookComponent } from '../shared/book/book.component';
import { CommonModule } from '@angular/common';
import { fullBook } from '../../shapes/shapes';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../config/environment';

@Component({
  selector: 'app-books',
  imports: [
    RectangleBackgroundComponent,
    BookComponent,
    CommonModule
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: fullBook[] = [];
  constructor(
    private http: HttpClient
  ) {

  }
  ngOnInit(): void {
    let result = this.http.get(enviroment.apiUrl+"/book/recents")
    result.subscribe({
      next: (data) => {
        this.books = data as fullBook[];
      },
      error: (err) => alert("Deu erro")
    });
  }
}

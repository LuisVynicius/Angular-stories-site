import { Component, Input, OnInit } from '@angular/core';
import { RectangleBackgroundComponent } from '../shared/rectangle-background/rectangle-background.component';
import { CategoryComponent } from '../shared/book/category/category.component';
import { CommonModule } from '@angular/common';
import { ChapterComponent } from './chapter/chapter.component';
import { ImgComponent } from './img/img.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookNamesComponent } from '../shared/book-names/book-names.component';
import { ViewBook } from '../../shapes/shapes';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../config/environment';

@Component({
  selector: 'app-book-view',
  imports: [
    RectangleBackgroundComponent,
    CategoryComponent,
    ChapterComponent,
    ImgComponent,
    BookNamesComponent,
    RouterLink,
    CommonModule
  ],
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.css'
})
export class BookViewComponent implements OnInit {
  fav: boolean = false;

  book: ViewBook = {
    name: "",
    author: "",
    creationDate: "",
    updatedDate: "",
    categories: [],
    description: "",
    chapters: []
  }

  constructor(
    private activedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    activedRoute.paramMap.subscribe(params => {
      this.book.name = params.get("name")!;
    });
  }
  ngOnInit(): void {
    let result = this.http.get(enviroment.apiUrl + "/book/name/" + this.book.name);
    result.subscribe({  
        next: (data) => {
          this.book = data as ViewBook
        },
        error: (err) => {
            
        }
      }
    );
  }
}

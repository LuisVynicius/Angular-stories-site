import { Component, Input } from '@angular/core';
import { RectangleBackgroundComponent } from '../shared/rectangle-background/rectangle-background.component';
import { CategoryComponent } from '../shared/book/category/category.component';
import { CommonModule } from '@angular/common';
import { ChapterComponent } from './chapter/chapter.component';
import { ImgComponent } from './img/img.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookNamesComponent } from '../shared/book-names/book-names.component';

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
export class BookViewComponent {
  @Input()
  categories: string[] = [""];
  fav: boolean = false;
  bookName: string | null = "";
  author: string | null = "Anonimo";

  constructor(
    private activedRoute: ActivatedRoute
  ) {
    activedRoute.paramMap.subscribe(params => {
      this.bookName = params.get("name");
    });
  }
}

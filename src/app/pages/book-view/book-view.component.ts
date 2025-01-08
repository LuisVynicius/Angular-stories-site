import { Component, Input } from '@angular/core';
import { RectangleBackgroundComponent } from '../shared/rectangle-background/rectangle-background.component';
import { CategoryComponent } from '../shared/book/category/category.component';
import { CommonModule } from '@angular/common';
import { ChapterComponent } from './chapter/chapter.component';
import { ImgComponent } from './img/img.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookNamesComponent } from '../shared/book-names/book-names.component';
import { viewBook } from '../../shapes/shapes';

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
  fav: boolean = false;

  book: viewBook = {
    name: "",
    author: "author",
    creationDate: "14/12/2004",
    updatedDate: "15/12/2004",
    categories: ['1', '2'],
    description: "description",
    chapters: ['cheguei', 'to aqui', 'fui']
  }

  constructor(
    private activedRoute: ActivatedRoute
  ) {
    activedRoute.paramMap.subscribe(params => {
      this.book.name = params.get("name")!;
    });
  }
}

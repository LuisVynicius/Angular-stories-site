import { Component, Input } from '@angular/core';
import { RectangleBackgroundComponent } from '../shared/rectangle-background/rectangle-background.component';
import { CategoryComponent } from '../shared/book/category/category.component';
import { CommonModule } from '@angular/common';
import { ChapterComponent } from './chapter/chapter.component';
import { ImgComponent } from './img/img.component';

@Component({
  selector: 'app-book-view',
  imports: [
    RectangleBackgroundComponent,
    CategoryComponent,
    ChapterComponent,
    ImgComponent,
    CommonModule
  ],
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.css'
})
export class BookViewComponent {
  @Input()
  categories: string[] = [""];
  fav: boolean = false;
}

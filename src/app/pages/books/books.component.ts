import { Component } from '@angular/core';
import { RectangleBackgroundComponent } from '../shared/rectangle-background/rectangle-background.component';
import { BookComponent } from '../shared/book/book.component';
import { CommonModule } from '@angular/common';
import { fullBook } from '../../shapes/shapes';

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
export class BooksComponent {
  books: fullBook[] = [];
}

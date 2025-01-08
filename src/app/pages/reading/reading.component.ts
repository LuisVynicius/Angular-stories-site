import { Component } from '@angular/core';
import { RectangleBackgroundComponent } from '../shared/rectangle-background/rectangle-background.component';
import { BookNamesComponent } from '../shared/book-names/book-names.component';
import { ActivatedRoute } from '@angular/router';
import { DefaultButtonComponent } from '../shared/default-button/default-button.component';
import { readingBook } from '../../shapes/shapes';

@Component({
  selector: 'app-reading',
  imports: [
    RectangleBackgroundComponent,
    BookNamesComponent,
    DefaultButtonComponent
  ],
  templateUrl: './reading.component.html',
  styleUrl: './reading.component.css'
})
export class ReadingComponent {
  
  book: readingBook = {
    name: "",
    author: "Mevy",
    text: "História muito daora"
  }

  constructor(
    private activedRoute: ActivatedRoute
  ) {
    activedRoute.paramMap.subscribe(params => {
      this.book.name = params.get("name")!;
    });
  }
}

import { Component } from '@angular/core';
import { RectangleBackgroundComponent } from '../shared/rectangle-background/rectangle-background.component';
import { BookNamesComponent } from '../shared/book-names/book-names.component';
import { ActivatedRoute } from '@angular/router';
import { DefaultButtonComponent } from '../shared/default-button/default-button.component';

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
  bookName: string | null = "";
  author: string | null = "Anonimo";
  text: string = "Texto";
  
  constructor(
    private activedRoute: ActivatedRoute
  ) {
    activedRoute.paramMap.subscribe(params => {
      this.bookName = params.get("name");
    });
  }
}

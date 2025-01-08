import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-names',
  imports: [
    RouterLink
  ],
  templateUrl: './book-names.component.html',
  styleUrl: './book-names.component.css'
})
export class BookNamesComponent {
  @Input()
  bookName: string = "";
  @Input()
  author: string = "";
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-names',
  imports: [],
  templateUrl: './book-names.component.html',
  styleUrl: './book-names.component.css'
})
export class BookNamesComponent {
  @Input()
  bookName: string = "";
  @Input()
  author: string = "";
}

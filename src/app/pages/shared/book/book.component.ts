import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [
    CategoryComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input()
  bookName: string = "";
  @Input()
  author: string = "";
  @Input()
  quantity: string = "";
  @Input()
  updateDate: string = "";
  @Input()
  categories: string[] = [""];
  @Input()
  description: string = "";
}

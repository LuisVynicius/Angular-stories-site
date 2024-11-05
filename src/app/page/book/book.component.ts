import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { chapter } from '../../objects/chapter';
import { ChapterBoxComponent } from './chapter-box/chapter-box.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { book } from '../../objects/book';
import { fdates } from '../../fakeData/fdates';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    ChapterBoxComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{
  @Input()
  bookName: string | null = "";
  
  book: book | undefined;

  constructor(
    private activedRoute: ActivatedRoute
  ) {
    activedRoute.paramMap.subscribe(params => {
      this.bookName = params.get("title");
    });
  }
  ngOnInit(): void {
    this.book = fdates[0]
  }

}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { chapter } from '../../objects/chapter';
import { ChapterBoxComponent } from './chapter-box/chapter-box.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

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
export class BookComponent {
  @Input()
  bookName: string | null = "";
  @Input()
  createBy: string = "";
  @Input()
  chapsNumber: number = 0;
  @Input()
  description: string = "";
  
  constructor(
    private activedRoute: ActivatedRoute
  ) {
    activedRoute.paramMap.subscribe(params => {
      this.bookName = params.get("title");
    });
  }

  chaps: chapter[] = [
    {
      title: "O começo da aventura"
    },
    {
      title: "O Goku aparece em algum lugar"
    },
    {
      title: "O Goku está indo ali"
    },
    {
      title: "Caramba, o Goku Morreu"
    },
    {
      title: "O Goku revive e ganha, fim"
    },
  ];
}

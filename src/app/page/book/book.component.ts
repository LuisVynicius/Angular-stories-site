import { Component } from '@angular/core';
import { ChapterBoxComponent } from './chapter-box/chapter-box.component';
import { CommonModule } from '@angular/common';
import { chapter } from '../../objects/chapter';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    ChapterBoxComponent,
    CommonModule
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
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

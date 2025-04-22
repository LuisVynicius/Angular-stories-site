import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-chapter',
  imports: [
    FormsModule
  ],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css'
})
export class ChapterComponent {

  @Input()
  name: string = "";

  @Input()
  bookName: string = "";

  @Input()
  date: string = "";

  @Input()
  number: number = 0;

  constructor(
    private router: Router
  ) {

  }

  toChapter() {
    this.router.navigate([`/tales/${this.bookName}/${this.number}`]);
  }

}

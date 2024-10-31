import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chapter-box',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './chapter-box.component.html',
  styleUrl: './chapter-box.component.css'
})
export class ChapterBoxComponent {
  @Input()
  chapNumber: string = "";
  @Input()
  chapTitle: string = "";
  @Input()
  bookName: string = "";
}
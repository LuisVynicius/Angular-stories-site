import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter-button',
  imports: [],
  templateUrl: './chapter-button.component.html',
  styleUrl: './chapter-button.component.css'
})
export class ChapterButtonComponent {

  @Input()
  text: string = "";

  @Input()
  active: boolean = true;

  @Input()
  pv: number = 0;

  @Input()
  chapter: number = 0;

  @Input()
  taleName: string = "";

  constructor(
    private router: Router
  ) {

  }

  nextChapter() {
    const result = Number(this.chapter) + Number(this.pv);

    if (!this.active) {
      alert("Último capítulo alcançado");
      return;
    }

    if (result === 0) {
      alert("Primeiro capítulo alcançado")
      return;
    }

    this.router.navigate([`tales/${this.taleName}/${result}`]);
  }
  
}

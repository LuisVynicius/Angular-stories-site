import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titles',
  imports: [],
  templateUrl: './titles.component.html',
  styleUrl: './titles.component.css'
})
export class TitlesComponent {

  constructor(
    private router: Router
  ) {

  }

  @Input()
  name: string = "";

  @Input()
  nameSize: string = "";

  @Input()
  author: string = "";

  @Input()
  authorSize: string = "";

  @Input()
  justifyContent: string = "";

  @Input()
  alignItems: string = "";

  goTale() {
    this.router.navigate([`tales/${this.name}`]);
  }

  goChapter() {
    
  }

}

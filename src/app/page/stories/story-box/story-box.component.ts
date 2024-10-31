import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-box',
  standalone: true,
  imports: [],
  templateUrl: './story-box.component.html',
  styleUrl: './story-box.component.css'
})
export class StoryBoxComponent {
  @Input()
  title: string = "";
  @Input()
  createBy: string = "";
  @Input()
  chapterCount: string = "";
  @Input()
  categories: string = "";
  @Input()
  description: string = "";

  constructor(private router: Router) {

  }

  redirectToStory(title: string) {
    this.router.navigate(['/book/' + title]);
  }

}

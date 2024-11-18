import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryBoxComponent } from './category-box/category-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story-box',
  standalone: true,
  imports: [
    CategoryBoxComponent,
    CommonModule
  ],
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
  categories: string[] = [""];
  @Input()
  description: string = "";

  constructor(private router: Router) {

  }

  redirectToStory(title: string) {
    this.router.navigate(['/book/' + title]);
  }

}

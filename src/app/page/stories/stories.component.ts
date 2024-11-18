import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fdates } from '../../fakeData/fdates';import { StoryBoxComponent } from '../../shared/story-box/story-box.component';
 '../../fakeData/fdates';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [
    StoryBoxComponent,
    CommonModule
  ],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent {
  items = fdates;
}

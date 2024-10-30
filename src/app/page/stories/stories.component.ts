import { Component } from '@angular/core';
import { StoryBoxComponent } from './story-box/story-box.component';
import { CommonModule } from '@angular/common';
import { fdates } from '../../fakeData/fdates'; '../../fakeData/fdates';

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

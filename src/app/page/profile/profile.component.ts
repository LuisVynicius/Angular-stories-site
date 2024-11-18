import { Component } from '@angular/core';
import { CustomOptionComponent } from './custom-option/custom-option.component';
import { CommonModule } from '@angular/common';
import { StoryBoxComponent } from '../../shared/story-box/story-box.component';
import { book } from '../../objects/book';
import { fdates } from '../../fakeData/fdates';
import { CustomButtonComponent } from '../login/custom-button/custom-button.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CustomOptionComponent,
    CommonModule,
    CustomButtonComponent,
    StoryBoxComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  page: boolean = false;

  myStories: book[] = fdates;
  favoriteStories: book[] = fdates;
  
  toFavoritePage() {
    this.page = true;
  }

  toMyStoriesPage() {
    this.page = false
  }

}

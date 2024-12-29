import { Component } from '@angular/core';
import { RectangleBackgroundComponent } from '../shared/rectangle-background/rectangle-background.component';
import { DefaultButtonComponent } from '../shared/default-button/default-button.component';
import { BookComponent } from '../shared/book/book.component';
import { CommonModule } from '@angular/common';
import { fullBook } from '../../shapes/shapes';

@Component({
  selector: 'app-profile',
  imports: [
    RectangleBackgroundComponent,
    BookComponent,
    CommonModule,
    DefaultButtonComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  name: string = "Mevy";
  list: boolean = false;

  myBooks: fullBook[] = [];
  favoriteBooks: fullBook[] = [];

  switchToMyBooks() {
    this.list = false;
  }

  switchToFavoriteBooks() {
    this.list = true;
  }

}

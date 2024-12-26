import { Component } from '@angular/core';
import { RectangleBackgroundComponent } from '../shared/rectangle-background/rectangle-background.component';
import { DefaultButtonComponent } from '../shared/default-button/default-button.component';
import { BookComponent } from '../shared/book/book.component';
import { CommonModule } from '@angular/common';

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
}

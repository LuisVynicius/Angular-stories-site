import { Component } from '@angular/core';
import { RectangleBackgroundComponent } from '../shared/rectangle-background/rectangle-background.component';
import { DefaultButtonComponent } from '../shared/default-button/default-button.component';
import { ItemRectangleComponent } from "./item-rectangle/item-rectangle.component";
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './text-box/text-box.component';

@Component({
  selector: 'app-my-area',
  imports: [
    RectangleBackgroundComponent,
    DefaultButtonComponent,
    ItemRectangleComponent,
    TextBoxComponent,
    CommonModule
],
  templateUrl: './my-area.component.html',
  styleUrl: './my-area.component.css'
})
export class MyAreaComponent {
  page: boolean = false;
}

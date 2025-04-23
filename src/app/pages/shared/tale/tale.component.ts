import { Component, Input } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from '../titles/titles.component';

@Component({
  selector: 'app-tale',
  imports: [
    CategoryComponent,
    TitlesComponent,
    CommonModule
  ],
  templateUrl: './tale.component.html',
  styleUrl: './tale.component.css'
})
export class TaleComponent {

  @Input()
  name: string = "";

  @Input()
  author: string = "";

  @Input()
  quantity: number = 0;

  @Input()
  updatedDate: string = "";

  @Input()
  likes: string = "";

  @Input()
  categories: string[] = [];

  @Input()
  description: string = "";

}

import { Component, Input } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tale',
  imports: [
    CategoryComponent,
    CommonModule
  ],
  templateUrl: './tale.component.html',
  styleUrl: './tale.component.css'
})
export class TaleComponent {

  @Input()
  title: string = "";

  @Input()
  subtitle: string = "";

  @Input()
  quantity: number = 0;

  @Input()
  date: string = "";

  @Input()
  likes: string = "";

  @Input()
  categories: string[] = [];

  @Input()
  description: string = "";

}

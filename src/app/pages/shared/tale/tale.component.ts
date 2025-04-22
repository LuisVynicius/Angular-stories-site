import { Component, Input } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tale',
  imports: [
    CategoryComponent,
    CommonModule,
    RouterLink
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
  creationDate: string = "";

  @Input()
  updatedDate: string = "";

  @Input()
  status: string = "";

  @Input()
  likes: string = "";

  @Input()
  categories: string[] = [];

  @Input()
  description: string = "";

}

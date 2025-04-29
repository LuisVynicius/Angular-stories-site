import { Component, Input } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from '../titles/titles.component';
import { TaleButtonComponent } from './tale-button/tale-button.component';
import { TalesService } from '../../../services/tales.service';

@Component({
  selector: 'app-tale',
  imports: [
    CategoryComponent,
    TitlesComponent,
    TaleButtonComponent,
    CommonModule
  ],
  templateUrl: './tale.component.html',
  styleUrl: './tale.component.css'
})
export class TaleComponent {

  constructor(
    private talesService: TalesService
  ) {

  }

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

  @Input()
  myTale: boolean = false;

  deleteTale() {
    this.talesService.deleteTale(this.name).subscribe({
      next: (success) => {
        window.location.reload();
      }
    });
  }

}

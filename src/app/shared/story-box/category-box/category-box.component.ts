import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-box',
  standalone: true,
  imports: [],
  templateUrl: './category-box.component.html',
  styleUrl: './category-box.component.css'
})
export class CategoryBoxComponent {
  @Input()
  text: string = "";
}

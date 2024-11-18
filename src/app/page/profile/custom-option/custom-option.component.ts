import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-option',
  standalone: true,
  imports: [],
  templateUrl: './custom-option.component.html',
  styleUrl: './custom-option.component.css'
})
export class CustomOptionComponent {
  @Input()
  text: string = ""
}

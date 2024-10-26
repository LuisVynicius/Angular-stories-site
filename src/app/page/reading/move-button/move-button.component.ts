import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-move-button',
  standalone: true,
  imports: [],
  templateUrl: './move-button.component.html',
  styleUrl: './move-button.component.css'
})
export class MoveButtonComponent {
  @Input()
  text: string = ""
}

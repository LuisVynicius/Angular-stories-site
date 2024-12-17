import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-box',
  imports: [],
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.css'
})
export class InputBoxComponent {
  @Input()
  text: string = "";
}

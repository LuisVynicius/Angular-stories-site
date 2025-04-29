import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tale-button',
  imports: [],
  templateUrl: './tale-button.component.html',
  styleUrl: './tale-button.component.css'
})
export class TaleButtonComponent {

  @Input()
  text: string = "";

  @Input()
  color: string = "";

}

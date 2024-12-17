import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-button',
  imports: [],
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.css'
})
export class DefaultButtonComponent {
  @Input()
  width: string = "0px";
  
  @Input()
  height: string = "0px";
  
  @Input()
  text: string = "";

}

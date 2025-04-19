import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-background-rectangle',
  imports: [
    FormsModule
  ],
  templateUrl: './background-rectangle.component.html',
  styleUrl: './background-rectangle.component.css'
})
export class BackgroundRectangleComponent {

  @Input()
  width: string = "";

  @Input()
  display: string = "";

  @Input()
  justifyContent: string = "";

  @Input()
  flexWrap: string = "";

  @Input()
  flexDirection: string = "";

}

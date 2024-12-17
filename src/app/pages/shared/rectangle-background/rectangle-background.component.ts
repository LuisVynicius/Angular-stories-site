import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rectangle-background',
  imports: [],
  templateUrl: './rectangle-background.component.html',
  styleUrl: './rectangle-background.component.css',
  standalone: true
})
export class RectangleBackgroundComponent {
  @Input()
  width: string = "0px";

  @Input()
  height: string = "0px";
}

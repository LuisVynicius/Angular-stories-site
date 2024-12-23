import { Component, input, Input } from '@angular/core';

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

  @Input()
  display: string = "block";

  @Input()
  flexDirection: string = "";

  @Input()
  gap: string = "";

  @Input()
  flexWrap: string = "";

  @Input()
  alignItems: string = "";

  @Input()
  justifyContent: string = "";
}

import { Component } from '@angular/core';
import { MoveButtonComponent } from './move-button/move-button.component';

@Component({
  selector: 'app-reading',
  standalone: true,
  imports: [
    MoveButtonComponent
  ],
  templateUrl: './reading.component.html',
  styleUrl: './reading.component.css'
})
export class ReadingComponent {
  
}

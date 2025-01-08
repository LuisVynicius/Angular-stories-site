import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-box',
  imports: [
    FormsModule
  ],
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.css'
})
export class TextBoxComponent {
  @Input()
  textarea01Msg: string = "";
  textarea01Content: string = "";

  @Input()
  textarea02Msg: string = "";
  textarea02Content: string = "";  
}

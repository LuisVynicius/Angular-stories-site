import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  imports: [
    FormsModule
  ],
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.css'
})
export class InputBoxComponent {
  @Input()
  text: string = "";
  @Input()
  value: string = "";
  @Input()
  type: string = "text";

  @Output() valueChange = new EventEmitter<string>();

  onValueChange(newValue: string): void {
    this.value = newValue;
    this.valueChange.emit(this.value);
  }
}

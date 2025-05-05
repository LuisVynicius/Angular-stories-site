import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [
    FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input()
  title: string = "";
  
  @Input()
  type: string = "";

  @Input()
  value: string = "";

  @Input()
  justifyContent: string = "";
  
  @Input()
  alignItems: string = "";

  @Input()
  width: string = "";

  @Input()
  height: string = "";

  @Input()
  alignText: string = "";

  @Output()
  valueChange = new EventEmitter<string>();

  onValueChange(newValue: string) {
    this.value = newValue;
    this.valueChange.emit(this.value);
  }
}

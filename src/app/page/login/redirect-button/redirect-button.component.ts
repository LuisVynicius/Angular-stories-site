import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redirect-button',
  standalone: true,
  imports: [],
  templateUrl: './redirect-button.component.html',
  styleUrl: './redirect-button.component.css'
})
export class RedirectButtonComponent {
  @Input()
  text: string = ""
  @Input()
  imgURL: string = ""
  @Input()
  link: string = ""
}

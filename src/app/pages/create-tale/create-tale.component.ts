import { Component } from '@angular/core';
import { BackgroundRectangleComponent } from '../shared/background-rectangle/background-rectangle.component';
import { InputComponent } from '../shared/input/input.component';
import { ButtonComponent } from '../shared/button/button.component';
import { TalesService } from '../../services/tales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tale',
  imports: [
    BackgroundRectangleComponent,
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './create-tale.component.html',
  styleUrl: './create-tale.component.css'
})
export class CreateTaleComponent {

  name: string = "";
  description: string = "";
  categories: string[] = [];

  constructor(
    private talesService: TalesService,
    private router: Router
  ) {

  }

  create() {
    console.log("Saiu aqui");
    this.talesService.createTale(this.name, this.description, this.categories).subscribe({
      next: (success) => {
        this.router.navigate(['myProfile']);
      }
    });
  }

}

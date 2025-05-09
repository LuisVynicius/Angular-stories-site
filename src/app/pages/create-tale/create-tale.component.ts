import { Component } from '@angular/core';
import { BackgroundRectangleComponent } from '../shared/background-rectangle/background-rectangle.component';
import { InputComponent } from '../shared/input/input.component';
import { ButtonComponent } from '../shared/button/button.component';
import { TalesService } from '../../services/tales.service';
import { Router } from '@angular/router';
import { taleCreate } from '../../shapes/tale';
import { TextService } from '../../services/text.service';

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
    private textService: TextService,
    private router: Router
  ) {
    
  }

  create() {
    const tale: taleCreate = {
      name: this.name,
      description: this.description,
      categories: this.categories
    }
    
    this.talesService.createTale(tale).subscribe({
      next: (success) => {
        this.router.navigate(['myProfile']);
      }
    });
  }

  correctDescription() {
    this.textService.getCorrections(this.description).subscribe({
      next: (success) => {
        if (success === "") {
          alert("Nenhum erro detectado.");
        } else {
          alert(success);
        }
      }
    });
  }

}

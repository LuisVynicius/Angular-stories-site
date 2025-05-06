import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { InputComponent } from '../../shared/input/input.component';
import { ChapterService } from '../../../services/chapter.service';
import { chapterCreate } from '../../../shapes/tale';

@Component({
  selector: 'app-create-field',
  imports: [
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './create-field.component.html',
  styleUrl: './create-field.component.css'
})
export class CreateFieldComponent {
  name: string = "";
  content: string = "";

  @Input()
  taleId: number = 0;

  constructor(
    private chapterService: ChapterService
  ) { }

  createChapter() {
    
    const chapter: chapterCreate = {
      taleId: this.taleId,
      name: this.name,
      content: this.content
    }

    this.chapterService.createChapter(chapter).subscribe({
      next: (success) => {
        alert("Capítulo criado");
      }
    });

  }
}

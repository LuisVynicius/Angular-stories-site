import { Component, OnInit } from '@angular/core';
import { BackgroundRectangleComponent } from '../shared/background-rectangle/background-rectangle.component';
import { ButtonComponent } from '../shared/button/button.component';
import { InputComponent } from '../shared/input/input.component';
import { TalesService } from '../../services/tales.service';
import { TextService } from '../../services/text.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterComponent } from '../shared/chapter/chapter.component';
import { CommonModule } from '@angular/common';
import { chapterCreate, taleUpdateAll, taleUpdateTale } from '../../shapes/tale';
import { CreateFieldComponent } from './create-field/create-field.component';

@Component({
  selector: 'app-update-tale',
  imports: [
    BackgroundRectangleComponent,
    ButtonComponent,
    InputComponent,
    ChapterComponent,
    CreateFieldComponent,
    CommonModule
  ],
  templateUrl: './update-tale.component.html',
  styleUrl: './update-tale.component.css'
})
export class UpdateTaleComponent implements OnInit {
  tale: taleUpdateAll = {
    id: 0,
    name: "",
    description: "",
    categories: [],
    chapters: []
  };

  chapter: chapterCreate = {
    taleId: 0,
    name: "",
    content: ""
  }

  showCreateField: boolean = false;

  constructor(
    private talesService: TalesService,
    private textService: TextService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.tale.name = params.get("name")!;
    })

    this.talesService.getTaleToUpdate(this.tale.name).subscribe({
      next: (success) => {
        this.tale.id = success.id;
        this.tale.name = success.name;
        this.tale.description = success.description;
        this.tale.categories = success.categories;
        this.tale.chapters = success.chapters;
      },
      error: (err) => {
        this.router.navigate([`myProfile`]);
      }
    });
  }

  updateTale() {
    const tale: taleUpdateTale = {
      id: this.tale.id,
      name: this.tale.name,
      description: this.tale.description,
      categories: this.tale.categories
    }

    this.talesService.updateTale(tale).subscribe({
      next: (success) => {
        alert("Atualizado");
      }
    });
  }

  correctDescription() {
    this.textService.getCorrections(this.tale.description).subscribe({
      next: (success) => {
        if (success === "") {
          alert("Nenhum erro detectado.");
        } else {
          alert(success);
        }
      }
    });
  }

  createChapter() {
    this.showCreateField = true;
  }

}

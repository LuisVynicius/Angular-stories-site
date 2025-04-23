import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BackgroundRectangleComponent } from '../shared/background-rectangle/background-rectangle.component';
import { CategoryComponent } from '../shared/category/category.component';
import { TalesService } from '../../services/tales.service';
import { ActivatedRoute } from '@angular/router';
import { taleView } from '../../shapes/tale';
import { ChapterComponent } from '../shared/chapter/chapter.component';
import { TitlesComponent } from '../shared/titles/titles.component';

@Component({
  selector: 'app-tale-page',
  imports: [
    BackgroundRectangleComponent,
    CategoryComponent,
    ChapterComponent,
    TitlesComponent,
    CommonModule
  ],
  templateUrl: './tale-page.component.html',
  styleUrl: './tale-page.component.css'
})
export class TalePageComponent implements OnInit{

  tale: taleView = {
    name: "",
    author: "",
    chaptersQuantity: 0,
    likeQuantity: 0,
    favoritesQuantity: 0,
    creationDate: "",
    updatedDate: "",
    status: "",
    categories: [],
    description: "",
    chapters: []
  }

  constructor(
    private talesService: TalesService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.paramMap.subscribe(params => {
      this.tale.name = params.get("name")!;
    })
  }

  ngOnInit(): void {
    this.talesService.getTale(this.tale.name).subscribe({
      next: (success) => {
        this.tale = success as taleView;
      }
    });
  }

}

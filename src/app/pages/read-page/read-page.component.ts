import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackgroundRectangleComponent } from '../shared/background-rectangle/background-rectangle.component';
import { taleRead } from '../../shapes/tale';
import { TalesService } from '../../services/tales.service';
import { ChapterButtonComponent } from './chapter-button/chapter-button.component';

@Component({
  selector: 'app-read-page',
  imports: [
    BackgroundRectangleComponent,
    ChapterButtonComponent
  ],
  templateUrl: './read-page.component.html',
  styleUrl: './read-page.component.css'
})
export class ReadPageComponent implements OnInit {

  number: number = 0;

  tale: taleRead = {
    name: "",
    author: "",
    chapterName: "",
    content: ""
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private talesService: TalesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.tale.name = params.get("name")!;
      this.number = Number(params.get("number"))!;
      
      this.getChapter();
    });
  }

  getChapter() {
    this.talesService.getChapter(this.tale.name, this.number).subscribe({
      next: (success) => {
        this.tale = success;
      }
    });
  }

}

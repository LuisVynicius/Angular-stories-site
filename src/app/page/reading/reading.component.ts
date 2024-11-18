import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoveButtonComponent } from './move-button/move-button.component';

@Component({
  selector: 'app-reading',
  standalone: true,
  imports: [
    MoveButtonComponent
  ],
  templateUrl: './reading.component.html',
  styleUrl: './reading.component.css'
})
export class ReadingComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    let bookTitle: string | null = "";
    let chapter: number | null = 0;

    this.activedRoute.paramMap
      .subscribe(params => {
        bookTitle = params.get('title');
        chapter = Number(params.get('chapter'));
      });
  }

  getBook(title: string | null) {
    
  }
  
}

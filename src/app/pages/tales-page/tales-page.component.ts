import { Component, OnInit } from '@angular/core';
import { BackgroundRectangleComponent } from '../shared/background-rectangle/background-rectangle.component';
import { tale } from '../../shapes/tale';
import { TaleComponent } from '../shared/tale/tale.component';
import { CommonModule } from '@angular/common';
import { TalesService } from '../../services/tales.service';

@Component({
  selector: 'app-tales-page',
  imports: [
    BackgroundRectangleComponent,
    TaleComponent,
    CommonModule
  ],
  templateUrl: './tales-page.component.html',
  styleUrl: './tales-page.component.css'
})
export class TalesPageComponent implements OnInit{
  
  constructor(
    private taleService: TalesService
  ) {}

  tales: tale[] = [];

  ngOnInit(): void {
    
    this.taleService.getTales().subscribe({
      next: (success) => {
        this.tales = success;
      }
    });
    
  }

}

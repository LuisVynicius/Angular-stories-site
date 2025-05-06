import { Component, OnInit } from '@angular/core';
import { TaleComponent } from '../shared/tale/tale.component';
import { BackgroundRectangleComponent } from '../shared/background-rectangle/background-rectangle.component';
import { tale } from '../../shapes/tale';
import { TalesService } from '../../services/tales.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    TaleComponent,
    BackgroundRectangleComponent,
    CommonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  username: string = "";
  tales: tale[] = [];
  
  constructor(
    private taleService: TalesService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.paramMap.subscribe(params => {
      this.username = params.get("username")!;
    })
  }

  ngOnInit(): void {
    this.taleService.getTalesByUsername(this.username).subscribe({
      next: (success) => {
        this.tales = success;
      }
    });
  }

}

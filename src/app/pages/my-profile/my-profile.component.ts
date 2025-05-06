import { Component, OnInit } from '@angular/core';
import { TaleComponent } from '../shared/tale/tale.component';
import { CommonModule } from '@angular/common';
import { BackgroundRectangleComponent } from '../shared/background-rectangle/background-rectangle.component';
import { ButtonComponent } from '../shared/button/button.component';
import { tale } from '../../shapes/tale';
import { TalesService } from '../../services/tales.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  imports: [
    TaleComponent,
    BackgroundRectangleComponent,
    ButtonComponent,
    CommonModule
  ],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent implements OnInit {
  tales: tale[] = [];
  username: string = "";
  
  mytales: boolean = true;

  constructor(
    private talesService: TalesService,
    private loginService: LoginService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.toMyTales();
    this.loginService.getNameByToken().subscribe({
      next: (success) => {
        this.username = success.username;    
      }
    });
  }
  
  toMyTales() {
    this.mytales = true;
    this.talesService.getMyTales().subscribe({
      next: (success) => {
        this.tales = success;    
      }
    });
  }

  toMyFavorites() {
    this.mytales = false;

    this.talesService.getMyFavorites().subscribe({
      next: (success) => {
        this.tales = success;    
      }
    });
  }

  toCreate() {
    this.router.navigate(['/create']);
  }

}

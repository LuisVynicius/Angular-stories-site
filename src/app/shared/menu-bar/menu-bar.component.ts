import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

  constructor(private navegator: Router) {

  }

  goToStoriesPage() {
    this.navegator.navigate(['/stories']);
  }

  goToProfilePage() {
    this.navegator.navigate(['/profile/' + "Token"]);
  }

}

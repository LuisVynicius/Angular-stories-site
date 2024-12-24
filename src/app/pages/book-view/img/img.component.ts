import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  imports: [],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent implements OnInit{
  @Input()
  img: string = ""
  @Input()
  fav: boolean = false;
  @Input()
  favImg: string = "fav-flag.png";
  
  ngOnInit() {
    if (this.fav) {
      this.favImg = "fav-flag-yellow.png";
    }
  }

  switchFav() {
    if (!this.fav) {
      this.favImg = "fav-flag-yellow.png";
    }
    else {
      this.favImg = "fav-flag.png";
    }
    this.fav = !this.fav;
  }

}

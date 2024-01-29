import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from "@angular/common";
import { Images } from '../interface/Images';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  images:Images[] = [];

  constructor(){}
  ngOnInit(): void {
    let im1:Images = {
      title : "Hannah",
      location: "assets/images/IMG_5709.JPG"
    };
    this.images.push(im1);
    let im2: Images = {
      title : "Hannah",
      location: "assets/images/IMG_5716.JPG"
    };
    this.images.push(im2);
  }
}

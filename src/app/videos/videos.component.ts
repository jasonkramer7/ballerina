import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from "@angular/common";
import { DanceVideo } from '../interface/DanceVideo';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {

  videos: DanceVideo[]=[];

  constructor(){}
  ngOnInit(): void {
    let dv1:DanceVideo = {
      title : "DDC Christmas 2022",
      description: "Hannah in the Dance Dynamics December 2022 dance recital - Silver Bells",
      location: "assets/videos/DanceDynamics/DDC_Christmas_2022.mov"
    };
    this.videos.push(dv1);
    let dv2: DanceVideo = {
      title : "DDC Spring 2023",
      description: "Hannah in the Dance Dynamics Spring 2023 dance recital - City of Stars",
      location: "assets/videos/DanceDynamics/DDC_2023.mov"
    };
    this.videos.push(dv2);
 
  }
}

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
    let dv:DanceVideo = {
      title : "BDA 2018 1",
      description: "Hannah in the Bellevue Dance Academy 2018 dance recital - Caterpillars Ball",
      location: "assets/videos/BDA/BDA_2018_1.mp4"
    };
    this.videos.push(dv);
    dv = {
      title : "BDA 2018 2",
      description: "Hannah in the Bellevue Dance Academy 2018 dance recital - Come Fly With Me",
      location: "assets/videos/BDA/BDA_2018_2.mp4"
    };
    this.videos.push(dv);
     dv = {
      title : "DDC Christmas 2022",
      description: "Hannah in the Dance Dynamics December 2022 dance recital - Silver Bells",
      location: "assets/videos/DanceDynamics/DDC_Christmas_2022.mov"
    };
    this.videos.push(dv);
    dv = {
      title : "DDC Spring 2023",
      description: "Hannah in the Dance Dynamics Spring 2023 dance recital - City of Stars",
      location: "assets/videos/DanceDynamics/DDC_2023.mov"
    };
    this.videos.push(dv);
    dv = {
      title : "ODP 2024 Lyrical",
      description: "Hannah in the Omaha Dance Project 2024 - What Was I Made For",
      location: "assets/videos/ODP/ODP_2024_madefor.mp4"
    };
    this.videos.push(dv);
    dv = {
      title : "ODP 2024 Ballet",
      description: "Hannah in the Omaha Dance Project - The Match Girl",
      location: "assets/videos/ODP/ODP_2024_matchgirl.mp4"
    };
    this.videos.push(dv);
 
  }
}

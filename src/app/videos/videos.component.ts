import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from "@angular/common";
import { DanceVideo } from '../interface/DanceVideo';
import { MatButtonModule } from '@angular/material/button';
import { videos } from './videos';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {

  videos: DanceVideo[] = [];

  constructor() { }
  ngOnInit(): void {
    this.videos = videos;
  }
}

import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

}

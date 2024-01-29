import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponent } from './toolbar/toolbar.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule, RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Ballerina';

}

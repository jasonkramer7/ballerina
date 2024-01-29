import { Routes } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'history', component: HistoryComponent},
    {path: 'videos', component: VideosComponent},
    {path: "home", component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full' }
];

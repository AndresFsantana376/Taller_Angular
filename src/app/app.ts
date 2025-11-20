import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { SeriesListComponent } from './series/series-list/series-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SeriesListComponent 
  ],
=======

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
>>>>>>> fded70a795039cf287b6828003da198affa4b835
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Taller_Angular');
}

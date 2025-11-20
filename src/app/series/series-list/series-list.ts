import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesService } from '../series.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series-list.html',
  styleUrls: ['./series-list.css']
})
export class SeriesListComponent implements OnInit {

  series: Serie[] = [];
  selectedSerie: Serie | null = null;

  constructor(private service: SeriesService) {}

  ngOnInit(): void {
    this.service.getSeries().subscribe(data => {
      this.series = data;
    });
  }

  averageSeasons(): number {
    if (this.series.length === 0) return 0;
    const total = this.series.reduce((acc, s) => acc + s.seasons, 0);
    return Number((total / this.series.length).toFixed(2));
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { NewProductsComponent } from '../catalog/new-products.component';
import { TopStoriesComponent } from '../catalog/top-stories.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          //{ title: 'Top 5', cols: 2, rows: 1, componentName: TopStoriesComponent },
          { title: 'Новинки', cols: 2, rows: 1, componentName: NewProductsComponent }
        ];
      }

      return [
        //{ title: 'Top 5', cols: 2, rows: 1, componentName: TopStoriesComponent },
        { title: 'Новинки', cols: 2, rows: 1, componentName: NewProductsComponent }
      ];
    })
  );
  slides = [
    {
      url: 'https://source.unsplash.com/400x300/?nature,water'
    },
    {
      url: 'https://source.unsplash.com/400x300/?nature,forest'
    }
  ]
  constructor(
    private breakpointObserver: BreakpointObserver ) {}
}
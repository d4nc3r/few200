import { Component, OnInit } from '@angular/core';
import { MovieListItem } from './models';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieList: MovieListItem[] = [
    { id: '1', title: 'Lion King', rentalDays: 3, rentalPrice: 2.99 },
    { id: '2', title: 'Moana', rentalDays: 3, rentalPrice: 3.99 },
    { id: '3', title: 'Cinderella', rentalDays: 3, rentalPrice: 5.99 },
  ];

  constructor() { }

  ngOnInit() {
  }

}

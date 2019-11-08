import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addMovie } from '../../actions/list.actions';
import { MoviesState } from '../../reducers';

@Component({
  selector: 'movies-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<MoviesState>) { }

  ngOnInit() {
  }

  add(
    titleEl: HTMLInputElement,
    rentalPriceEl: HTMLInputElement,
    rentalDaysEl: HTMLInputElement
  ) {
    const itemToAdd = {
      title: titleEl.value,
      rentalPrice: rentalPriceEl.valueAsNumber,
      rentalDays: +rentalDaysEl.value
    };
    this.store.dispatch(addMovie({ ...itemToAdd }));

    // Reset the form
    titleEl.value = '';
    rentalPriceEl.value = '';
    rentalDaysEl.value = '2';
    titleEl.focus();
  }

}

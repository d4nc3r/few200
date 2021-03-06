import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentCount, selectDecrementDisabled, selectCountBy, selectFizzBuzz } from 'src/app/reducers';
import { Observable } from 'rxjs';
import * as actions from 'src/app/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;
  countBy$: Observable<number>;
  decrementDisabled$: Observable<boolean>;
  showFizz$: Observable<boolean>;
  showBuzz$: Observable<boolean>;
  fizzBuzz$: Observable<FizzBuzz>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCurrentCount);
    this.countBy$ = this.store.select(selectCountBy);
    this.decrementDisabled$ = this.store.select(selectDecrementDisabled);
    // this.showFizz$ = this.store.select(selectShowFizz);
    // this.showBuzz$ = this.store.select(selectShowBuzz);
    this.fizzBuzz$ = this.store.select(selectFizzBuzz);
  }

  increment() {
    this.store.dispatch(actions.increment());
  }

  decrement() {
    this.store.dispatch(actions.decrement());
  }

  reset() {
    this.store.dispatch(actions.reset());
  }

  setCountBy(countBy: number) {
    this.store.dispatch(actions.countBySet({ countBy }));
  }
}

interface FizzBuzz {
  fizz: boolean;
  buzz: boolean;
}

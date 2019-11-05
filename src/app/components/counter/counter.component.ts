import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectCurrentCount, selectDecrementDisabled, selectCountBy } from 'src/app/reducers';
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

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCurrentCount);
    this.countBy$ = this.store.select(selectCountBy);
    this.decrementDisabled$ = this.store.select(selectDecrementDisabled);
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

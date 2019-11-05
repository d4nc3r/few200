import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { CounterState } from 'src/app/reducers/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.count$ = this.store.select(getCurrent);
  }

  increment() {
    this.store.dispatch({ type: 'increment' });
  }

  decrement() {
    this.store.dispatch({ type: 'decrement' });
  }

  reset() {
    this.store.dispatch({ type: 'reset' });
  }
}

function getCurrent(state: AppState): number {
  return state.counter.current;
}

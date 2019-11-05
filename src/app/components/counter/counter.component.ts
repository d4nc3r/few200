import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Observable } from 'rxjs';
import * as actions from 'src/app/actions/counter.actions';

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
    this.store.dispatch(actions.increment());
  }

  decrement() {
    this.store.dispatch(actions.decrement());
  }

  reset() {
    this.store.dispatch(actions.reset());
  }
}

function getCurrent(state: AppState): number {
  return state.counter.current;
}

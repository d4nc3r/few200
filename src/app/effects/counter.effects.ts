// Actions gives us access to the observable stream of Actions
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as counterActions from 'src/app/actions/counter.actions';
import * as appActions from 'src/app/actions/app.actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) { }

  // this could be a way to do analytics / instrumentation,
  // so that if we ever change the way we do it, we can change it in just one place
  // logAllActions$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(action => console.log(`got an action of type ${action.type}`))
  //   ), { dispatch: false } // default is true, this tells it NOT to put the action back into the reducer
  // );
  writeCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(action => localStorage.setItem('countBy', action.countBy.toString()))
    ), { dispatch: false }
  );

  readCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => localStorage.getItem('countBy')), // value from localStorage or null if it doesn't exist
      filter(countBy => countBy !== null), // only continue if it was stored previously
      map(countBy => parseInt(countBy, 10)), // take our string, turn it into a number (base 10)
      map(countBy => counterActions.countBySet({ countBy })) // turn it into an action that will be dispatched
    ), { dispatch: true }
  );

}

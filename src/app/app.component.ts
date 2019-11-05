import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { applicationStarted } from './actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'few200';

  constructor(private store: Store<AppState>) {
    // if something happens in the app init code that changes how the component is displayed,
    // do NOT put this in the constructor, put it in the ngOnInit
    store.dispatch(applicationStarted());
  }

  makeUpper() {
    this.title = this.title.toUpperCase();
  }
}

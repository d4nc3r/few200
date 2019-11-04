import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoItem } from '../models';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() items$: Observable<TodoItem[]>;
  status$: Observable<StatusInfo>;

  constructor() { }

  ngOnInit() {
    this.status$ = this.items$.pipe(
      map(makeStatus)
    );
  }

}

// this is a "selector" - it knows how to take the items and make something else
// like a sort of query
function makeStatus(items: TodoItem[]): StatusInfo {
  return {
    totalTodos: items.length,
    incompleteTodos: items.filter(item => !item.completed).length
  } as StatusInfo;
}

interface StatusInfo {
  totalTodos: number;
  incompleteTodos: number;
}

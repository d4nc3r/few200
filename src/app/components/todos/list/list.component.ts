import { Component, Input, OnChanges } from '@angular/core';
import { TodoItem } from '../models';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnChanges {
  @Input() items: TodoItem[];

  constructor(private service: TodoDataService) { }

  ngOnChanges() {
    this.sortItems();
  }

  sortItems() {
    this.items.sort((item1: TodoItem, item2: TodoItem) => {
      if (item1.completed === item2.completed) { return 0; }
      return item1.completed ? 1 : -1;
    });
  }

  markComplete(item: TodoItem) {
    this.service.markCompleted(item);
  }
}

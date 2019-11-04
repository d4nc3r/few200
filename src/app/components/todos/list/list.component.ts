import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: TodoItem[] = [
    { id: '1', description: 'Clean kitty litter', completed: false },
    { id: '2', description: 'Do dishes', completed: true },
    { id: '3', description: 'Vacuum living room', completed: false },
    { id: '4', description: 'Take out recyclables', completed: true }
  ];

  constructor() { }

  ngOnInit() {
    this.items.sort(this.compareItems);
  }

  compareItems(item1: TodoItem, item2: TodoItem) {
    if (item1.completed === item2.completed) { return 0; }
    return item1.completed ? 1 : -1;
  }
}

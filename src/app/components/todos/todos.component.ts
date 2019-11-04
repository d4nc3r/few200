import { Component, OnInit } from '@angular/core';
import { TodoItem } from './models';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  id = 4;
  items$: Observable<TodoItem[]>;

  constructor(private service: TodoDataService) { }

  ngOnInit() {
    this.items$ = this.service.getTodoItems();
  }

  addTodoItem(desc: string) {
    this.service.addTodoItem(desc);
  }
}

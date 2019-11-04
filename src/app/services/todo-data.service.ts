import { TodoItem } from '../components/todos/models';
import { BehaviorSubject, Observable } from 'rxjs';


export class TodoDataService {
  private subject: BehaviorSubject<TodoItem[]>;
  private data: TodoItem[] = [
    { id: '1', description: 'Clean kitty litter', completed: false },
    { id: '2', description: 'Do dishes', completed: true },
    { id: '3', description: 'Vacuum living room', completed: false },
    { id: '4', description: 'Take out recyclables', completed: true }
  ];
  id = 4;

  constructor() {
    this.subject = new BehaviorSubject<TodoItem[]>(this.data);
  }

  getTodoItems(): Observable<TodoItem[]> {
    return this.subject.asObservable();
  }

  addTodoItem(desc: string) {
    this.id++;
    const itemToAdd = {
      id: this.id.toString(),
      description: desc,
      completed: false
    };
    this.data = [itemToAdd, ...this.data];
    this.subject.next(this.data);
  }

  markCompleted(item: TodoItem) {
    item.completed = true;
    this.data = [item, ...this.data.filter(i => i.id !== item.id)];
    this.subject.next(this.data);
  }
}

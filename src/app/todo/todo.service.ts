import { Injectable, signal, computed } from '@angular/core';
import { ITodo } from './ITodo';
import { listData } from './MOCK_TODO';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  list = signal<ITodo[]>(listData); 
  
  add = (newTodo: ITodo) => {

    this.list.update(currentList => [...currentList, newTodo]);

    console.log(newTodo);
    console.log(this.list());
  };

  remove = (todo: ITodo) => {
    let newList = this.list().filter((ctodo=> ctodo !== todo));

    this.list.set(newList);
  }
}

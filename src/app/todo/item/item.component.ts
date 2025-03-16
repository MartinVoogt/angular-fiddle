import { Component, computed, inject, input, signal } from '@angular/core';

import { ITodo } from '../ITodo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'tdf-todo-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  todoService = inject(TodoService);

  item = input.required<ITodo>();

  setComplete = (): void => {
    this.item().isCompleted = true; 
  }

  setRemove = (todo: ITodo):void => {
    this.todoService.remove(todo); 
  }
}

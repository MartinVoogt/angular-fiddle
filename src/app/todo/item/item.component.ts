import { Component, computed, inject, input, signal } from '@angular/core';
import { ITodo } from '../ITodo';

@Component({
  selector: 'tdf-todo-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  item = input.required<ITodo>();

  setComplete = () => {
    this.item().isCompleted = true; 
  }
}

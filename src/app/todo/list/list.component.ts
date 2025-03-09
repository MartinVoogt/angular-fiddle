import { Component, inject, WritableSignal, computed } from '@angular/core'
import { TodoService } from '../todo.service'
import { ItemComponent } from '../item/item.component';
import { ITodo } from '../ITodo';

@Component({
    selector: 'tdf-todo-ist',
    imports: [ItemComponent],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})

export class ListComponent {
    todoService = inject(TodoService)
    todoItems = this.todoService.list(); 
    
    addItem = () => {
 
        let item:ITodo = {
            id: 100, 
            name: "Nieuw Todo", 
            description: "Nieuw todo item",
            isCompleted: false
          };
          this.todoService.add(item); 
    }
}

import { Component, inject, Signal, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoService } from '../todo.service';
import { ItemComponent } from '../item/item.component';
import { ITodo } from '../ITodo';
import { ToastrService } from 'ngx-toastr';
import { SearchComponent } from '../search/search.component';

@Component({
    selector: 'tdf-todo-ist',
    imports: [ItemComponent, RouterLink, SearchComponent],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ListComponent {
    private todoService = inject(TodoService);
    private limit = signal<number>(5);
    private toastr = inject(ToastrService);
    private search = signal<string>(''); // search value
    private allTodos: Signal<ITodo[]> = this.todoService.todos ?? signal([]);

    // list with filtered content
    public list = computed(() => {
        const searchTerm = this.search().toLowerCase();
        const limitVal = this.limit();

        const filtered = this.allTodos().filter(
            (todo) =>
                todo.name.toLowerCase().includes(searchTerm) || todo.description.toLowerCase().includes(searchTerm)
        );

        return filtered.slice(0, limitVal);
    });

    todosBySearchValue(value: string | null) {
        this.search.set(value ?? '');
    }

    limitChange(event: any) {
        let value: number = event.currentTarget.value;
        this.limit.set(value);
    }

    deleteTodo(todo: ITodo) {
        this.todoService.remove$(todo).subscribe(() => {
            this.toastr.success('Is succesvol verwijderd', `${todo.id} - ${todo.name}`);
        });
    }

    updateTodo(todo: ITodo) {
        this.todoService.update$(todo).subscribe(() => {
            this.toastr.success('Is succesvol geupdate', `${todo.id} - ${todo.name}`);
        });
    }
}

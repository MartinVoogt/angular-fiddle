import { Component, inject, Signal, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoService } from '../todo.service';
import { ItemComponent } from '../item/item.component';
import { ITodo, IOption } from '../ITodo';
import { ToastrService } from 'ngx-toastr';
import { SearchComponent } from '../search/search.component';
import { SelectComponent } from '../../shared/form/select/select.component';

@Component({
    selector: 'tdf-todo-ist',
    imports: [ItemComponent, RouterLink, SearchComponent, SelectComponent],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ListComponent {
    private todoService = inject(TodoService);
    private limit = signal<number>(5);
    private toastr = inject(ToastrService);
    private search = signal<string>(''); // search value
    private filterState = signal<IOption>({ label: '', value: '' }); // hmm ...
    private allTodos: Signal<ITodo[]> = this.todoService.todos ?? signal([]);

    // misschien eerder een const van maken, in een andere file?
    public filterOptions: Array<IOption> = [
        { label: 'Alle todos', value: '', selected: true },
        { label: 'Open todos', value: 'open' },
        { label: 'Afgeronde todos', value: 'completed' },
    ];

    // list with filtered content
    public list = computed(() => {
        const searchTerm = this.search().toLowerCase();
        const limitVal = this.limit();
        const state = this.filterState();

        const searchFiltered = this.allTodos().filter(
            (todo) =>
                todo.name.toLowerCase().includes(searchTerm) || todo.description.toLowerCase().includes(searchTerm)
        );

        const filteredByState =
            state.value !== ''
                ? searchFiltered.filter((todo) => {
                      return state.value == 'open' ? todo.isCompleted == false : todo.isCompleted == true;
                  })
                : searchFiltered;

        return filteredByState.slice(0, limitVal);
    });

    todosBySearchValue(value: string | null) {
        this.search.set(value ?? '');
    }

    todosByStateValue(option: IOption) {
        this.filterState.set(option);
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

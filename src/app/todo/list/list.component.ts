import { Component, inject, Signal, signal, computed } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { ItemComponent } from '../item/item.component';
import { ITodo, IOption, Priority } from '../ITodo';
import { ToastrService } from 'ngx-toastr';
import { SearchComponent } from '../search/search.component';
import { SelectComponent } from '../../shared/form/select/select.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { LIMIT_OPTIONS, FILTER_OPTIONS, PRIORITY_MAP } from '../todo.constants';
import { TitleComponent } from '../../shared/text/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
    selector: 'tdf-todo-ist',
    imports: [
        ItemComponent,
        SearchComponent,
        SelectComponent,
        ButtonComponent,
        TitleComponent,
    ],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ListComponent {
    private router = inject(Router);
    private activatedRoute = inject(ActivatedRoute);
    private todoService = inject(TodoService);
    private limit = signal<number>(5);
    private toastr = inject(ToastrService);
    private search = signal<string>(''); // search value
    private filterState = signal<IOption>({ label: '', value: '' }); // hmm ...
    public filterOptions = FILTER_OPTIONS;
    public limitOptions = LIMIT_OPTIONS;
    public faAddIcon = faPlus;

    public priorityParam = toSignal(
        this.activatedRoute.params.pipe(map((params) => params['priority'])),
        { initialValue: '' }
    );

    public count = computed(() => {
        return this.todoService.todos().length;
    });
    // list with filtered content
    public list = computed(() => {
        const searchTerm = this.search().toLowerCase();
        const limitVal = this.limit();
        const state = this.filterState();
        const priority = this.priorityParam();
        const normalizedPriority: Priority = PRIORITY_MAP[priority];

        const searchFiltered = this.todoService
            .todos()
            .filter(
                (todo) =>
                    todo.name.toLowerCase().includes(searchTerm) ||
                    todo.description.toLowerCase().includes(searchTerm)
            );

        const filteredByState =
            state.value !== ''
                ? searchFiltered.filter((todo) => {
                      return state.value == 'open'
                          ? todo.isCompleted == false
                          : todo.isCompleted == true;
                  })
                : searchFiltered;

        const filteredByPriority = normalizedPriority
            ? filteredByState.filter((todo) => todo.priority === normalizedPriority)
            : filteredByState;

        return filteredByPriority.slice(0, limitVal);
    });

    handleAddRoute() {
        this.router.navigate(['add-item']);
    }

    todosBySearchValue(value: string | null) {
        this.search.set(value ?? '');
    }

    todosByStateValue(option: IOption) {
        this.filterState.set(option);
    }

    limitChange(option: IOption) {
        let value = option.value as number;
        this.limit.set(value);
    }

    deleteTodo(todo: ITodo) {
        this.todoService.remove$(todo).subscribe({
            next: (value) => {
                this.toastr.success(
                    'Is succesvol verwijderd',
                    `${todo.id} - ${todo.name}`
                );
            },
        });
    }

    updateTodo(todo: ITodo) {
        this.todoService.update$(todo).subscribe(() => {
            this.toastr.success('Is succesvol geupdate', `${todo.id} - ${todo.name}`);
        });
    }
}

import { Routes } from '@angular/router';
import { ListComponent } from './todo/list/list.component';
import { ListComponent as participantsListComponent } from './participants/list/list.component';
import { AddItemComponent } from './todo/add-item/add-item.component';

export const routes: Routes = [
    { path: '', component: ListComponent, title: 'TodoList overview' },
    {
        path: 'prioriteit/:priority',
        component: ListComponent,
        title: 'TodoList met prioriteit',
    },
    { path: 'edit-item/:todoId', component: AddItemComponent, title: 'Edit todo item' },
    { path: 'add-item', component: AddItemComponent, title: 'Add todo item' },
    {
        path: 'deelnemers',
        component: participantsListComponent,
        title: 'Deelnemer lijst',
    },
];

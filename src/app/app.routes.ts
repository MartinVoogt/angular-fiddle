import { Routes } from '@angular/router';
import { ListComponent } from './todo/list/list.component';
import { ListComponent as participantsListComponent } from './participants/list/list.component';
import { AddItemComponent } from './todo/add-item/add-item.component';
import { LoginComponent } from './shared/login/login.component';
import { adminGuard } from './guards/admin.guard';
import { ProfileComponent } from './profile/profile.component';
export const routes: Routes = [
    //{ path: '', component: ListComponent, title: 'TodoList overview' },
    {
        path: '',
        component: participantsListComponent,
        title: 'Deelnemer lijst',
    },
    {
        path: 'prioriteit/:priority',
        component: ListComponent,
        title: 'TodoList met prioriteit',
    },
    { path: 'edit-item/:todoId', component: AddItemComponent, title: 'Edit todo item' },
    {
        path: 'add-item',
        component: AddItemComponent,
        title: 'Add todo item',
        canActivate: [adminGuard],
    },
    {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile',
        canActivate: [adminGuard],
    },
    {
        path: 'deelnemers',
        component: participantsListComponent,
        title: 'Deelnemer lijst',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Inloggen',
    },
];

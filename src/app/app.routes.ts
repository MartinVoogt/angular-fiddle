import { Routes } from '@angular/router';
/* import { AddComponent } from './add/add.component'; */
import { ListComponent } from './todo/list/list.component';
import { AddItemComponent } from './todo/add-item/add-item.component';

export const routes: Routes = [
	{ path: '' , component: ListComponent },
	{ path: 'add-item', component: AddItemComponent }
];

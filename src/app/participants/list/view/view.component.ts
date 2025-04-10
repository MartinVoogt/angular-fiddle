import { Component, signal, input } from '@angular/core';

@Component({
    selector: 'tdf-participants-view',
    imports: [],
    templateUrl: './view.component.html',
    styleUrl: './view.component.scss',
})
export class ViewComponent {
    public participants = input();
}

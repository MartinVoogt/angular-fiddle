import { Component } from '@angular/core';
import {
    FontAwesomeModule,
    IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'tdf-participants-filter',
    imports: [FontAwesomeModule],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.scss',
})
export class FilterComponent {
    public icon = faPlus;
}

import { Component, model, output } from '@angular/core';
import { GenderComponent } from './components/gender/gender.component';
import { ActiveComponent } from './components/active/active.component';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FilterType } from '../../types/participant.types';
import { JsonPipe } from '@angular/common';

const imports = [GenderComponent, ActiveComponent, JsonPipe];
@Component({
    selector: 'tdf-participants-filter',
    imports,
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.scss',
})
export class FilterComponent {
    public filters = model<FilterType>({});
    public filterIcon = faFilter;
}

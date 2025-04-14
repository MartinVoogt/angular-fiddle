import { Component, inject, computed, model, signal } from '@angular/core';
import { TitleComponent } from '../../shared/text/title/title.component';
import { ViewComponent } from './view/view.component';
import { FilterComponent } from './filter/filter.component';
import { ParticipantsService } from '../../services/participants.service';
import { IParticipant } from '../types/participant.types';

type FilterKey = keyof IParticipant;
type FilterValue = IParticipant[FilterKey];
type FilterType = Partial<Record<FilterKey, FilterValue[]>>;

@Component({
    selector: 'tdf-list',
    imports: [TitleComponent, ViewComponent, FilterComponent],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ListComponent {
    private participantsService = inject(ParticipantsService);

    public allParticipants = this.participantsService.allParticipants;

    public participants = computed(() => {
        // hier nog meer logica toevoegen

        return this.allParticipants();
    });

    public filters = signal<FilterType[]>([]);
}

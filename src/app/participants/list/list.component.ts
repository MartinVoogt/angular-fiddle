import { Component, inject, Signal } from '@angular/core';
import { TitleComponent } from '../../shared/text/title/title.component';
import { ViewComponent } from './view/view.component';
import { FilterComponent } from './filter/filter.component';
import { ParticipantsService } from '../../services/participants.service';
import { IParticipant } from '../models/IParticipant';

@Component({
    selector: 'tdf-list',
    imports: [TitleComponent, ViewComponent, FilterComponent],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ListComponent {
    private participantsService = inject(ParticipantsService);

    public participants = []; //this.participantsService.participants;
}

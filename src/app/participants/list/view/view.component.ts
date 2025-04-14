import { Component, signal, input, Signal } from '@angular/core';
import { IParticipant } from '../../types/participant.types';

@Component({
    selector: 'tdf-participants-view',
    imports: [],
    templateUrl: './view.component.html',
    styleUrl: './view.component.scss',
})
export class ViewComponent {
    public participants = input<IParticipant[]>();

    // pipe maken voor birtdays / leeftijd
}

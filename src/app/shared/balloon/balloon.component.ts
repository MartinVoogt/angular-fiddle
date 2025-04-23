import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { popInOut } from '../animations';

@Component({
    selector: 'tdf-balloon',
    imports: [],
    template: `
        <span class="balloon">
            <span [@updateAnimation]="animationFade">{{ value() }}</span>
        </span>
    `,
    styleUrl: './balloon.component.scss',
    animations: [
        trigger('updateAnimation', [
            state('start', style({ transform: 'scale(0)' })),
            state('end', style({ transform: 'scale(1)' })),
            transition('start => end', [
                useAnimation(popInOut, {
                    params: { duration: '.3s', start: '0', end: '1' },
                }),
            ]),
            transition('end => start', [
                useAnimation(popInOut, {
                    params: { duration: '.3s', start: '1', end: '0' },
                }),
            ]),
        ]),
    ],
})
export class BalloonComponent implements OnChanges {
    public animationFade = '';
    public value = input.required();

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            this.animationFade = 'end';
            requestAnimationFrame(() => {
                this.animationFade = 'start';
                requestAnimationFrame(() => {
                    this.animationFade = 'end';
                });
            });
        }
    }
}

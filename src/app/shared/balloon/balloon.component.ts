import { state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, computed, input, InputSignal, signal } from '@angular/core';
import { popInOut } from '../animations';

@Component({
    selector: 'tdf-balloon',
    imports: [],
    template: `
        <span class="balloon">
            <span [@popInOut]="popAnimate()">{{ value() }}</span>
        </span>
    `,
    styleUrl: './balloon.component.scss',
    animations: [popInOut('In')],
})
export class BalloonComponent {
    public animationFade = '';
    public value: InputSignal<number> = input.required();
    public initialValue = 0;

    public popAnimate = computed(() => {
        const animate = this.initialValue !== this.value();
        this.initialValue = this.value();
        return animate;
    });
}

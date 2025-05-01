import {
    animate,
    animation,
    AnimationTriggerMetadata,
    keyframes,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Mode } from './types/mode.type';

// fade.animation.ts
export const fadeInTransition = animation(
    [
        animate(
            '{{ duration }} ease-in',
            keyframes([
                style({ opacity: 0, transform: 'scale(1.05)', offset: 0 }),
                style({ opacity: 0.5, transform: 'scale(0.98)', offset: 0.5 }),
                style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
            ])
        ),
    ],
    { params: { duration: '600ms' } }
);

export const fadeOutTransition = animation(
    [
        animate(
            '{{ duration }} ease-in',
            keyframes([
                style({ opacity: 1, transform: 'scale(1)', offset: 0 }),
                style({ opacity: 0.5, transform: 'scale(1.02)', offset: 0.5 }),
                style({ opacity: 0, transform: 'scale(0.9)', offset: 1 }),
            ])
        ),
    ],
    { params: { duration: '400ms' } }
);

export const popInOutv2 = animation(
    [
        animate(
            '{{ duration }} ease-in',
            keyframes([
                style({ transform: 'scale({{ start }})' }),
                style({ transform: 'scale(.2)' }),
                style({ transform: 'scale({{ end }})' }),
            ])
        ),
    ],
    {
        params: {
            duration: '.4s',
            start: '0',
            end: '1',
        },
    }
);

const getPopTransform = (mode: Mode): { start: string; end: string } => {
    switch (mode) {
        case 'In':
            return { start: 'scale(0)', end: 'scale(1)' };
        case 'Out':
            return { start: 'scale(1)', end: 'scale(0)' };
        default:
            return { start: 'scale(0)', end: 'scale(1)' };
    }
};

export const popInOut = (
    mode: Mode,
    speed: `${number}ms` = '250ms'
): AnimationTriggerMetadata => {
    const { start, end } = getPopTransform(mode);

    return trigger('popInOut', [
        transition(':enter', [
            style({ transform: start }),
            animate(`${speed} ease-in`, style({ transform: end })),
        ]),
        transition(':leave', [
            style({ transform: end }),
            animate(`${speed} ease-in`, style({ transform: start })),
        ]),
    ]);
};

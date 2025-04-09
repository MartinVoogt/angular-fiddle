import { animate, animation, keyframes, style } from '@angular/animations';

// fade.animation.ts
export const fadeInTransition = animation(
    [
        animate(
            '{{ duration }} ease-in-out',
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

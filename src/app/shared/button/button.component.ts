import { Component, input, output } from '@angular/core';

import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'tdf-button',
    imports: [FontAwesomeModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent {
    public readonly buttonClass = input<string>();
    public readonly isDisabled = input<boolean>(false);
    public readonly type = input<string>('button');
    public readonly icon = input<IconDefinition>();

    public clickHandle = output<void>();

    handleClickEvent(event: Event) {
        event.stopPropagation();
        this.clickHandle.emit();
    }
}

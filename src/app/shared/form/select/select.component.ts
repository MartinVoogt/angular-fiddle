import { Component, input, OnInit, output } from '@angular/core';
import { IOption } from '../../types/shared.type';

@Component({
    selector: 'tdf-select',
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss',
})
export class SelectComponent {
    public options = input.required<IOption[]>();
    public label = input<string | number>('');
    public class = input<string>('form-select');
    public selectedValue = output<IOption>();

    changeEvent(event: Event): void {
        let element = event.target as HTMLSelectElement;
        let selectedOption = element.options[element.selectedIndex];
        let option: IOption = {
            label: selectedOption.innerText,
            value: selectedOption.value,
        };

        this.selectedValue.emit(option);
    }
}

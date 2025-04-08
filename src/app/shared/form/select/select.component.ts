import { Component, input, OnInit, output } from '@angular/core';
import { IOption } from '../../../todo/ITodo';

@Component({
    selector: 'tdf-select',
    imports: [],
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss',
})
export class SelectComponent {
    public options = input.required<IOption[]>();
    public label = input<string>('');
    public selectedValue = output<IOption>();

    changeEvent(event: Event) {
        let element = event.target as HTMLSelectElement;
        let selectedOption = element.options[element.selectedIndex];
        let option: IOption = { label: selectedOption.innerText, value: selectedOption.value };

        this.selectedValue.emit(option);
        // emit
    }
}

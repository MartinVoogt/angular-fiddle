import { Component, input } from '@angular/core';

@Component({
    selector: 'tdf-loader',
    imports: [],
    templateUrl: './loader.component.html',
    styleUrl: './loader.component.scss',
})
export class LoaderComponent {
    public loadingTest = input<string>('Loading');
    
}

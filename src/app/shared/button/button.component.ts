import { Component, input } from '@angular/core';

@Component({
  selector: 'tdf-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  public readonly class = input<string>(); 
  public readonly disabled = input<boolean>(false); 
  
}

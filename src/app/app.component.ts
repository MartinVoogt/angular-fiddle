import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavigationComponent } from "./navigation/navigation.component";

@Component({
    selector: 'tdf-root',
    imports: [RouterOutlet, NavigationComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})

export class AppComponent {
    title: string = 'Dit is een Todo App'
    type: number = 123
}

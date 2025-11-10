import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RecordingsContainerComponent } from './recordings-container/recordings-container.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RecordingsContainerComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'soundboard';
}

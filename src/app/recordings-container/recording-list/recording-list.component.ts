import { Component, inject } from '@angular/core';
import { RecordingsService } from '../recordings.service';
import { JsonPipe } from '@angular/common';
import { Recording } from '../models/recording.model';

@Component({
    selector: 'app-recording-list',
    standalone: true,
    imports: [],
    templateUrl: './recording-list.component.html',
    styleUrl: './recording-list.component.scss',
})
export class RecordingListComponent {
    recordingsService = inject(RecordingsService);
}

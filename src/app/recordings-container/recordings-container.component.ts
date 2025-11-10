import { Component, inject } from '@angular/core';
import { RecordingsService } from './recordings.service';
import { AsyncPipe } from '@angular/common';
import { RecordingSearchComponent } from './recording-search/recording-search.component';
import { RecordingListComponent } from './recording-list/recording-list.component';

@Component({
  selector: 'app-recordings-container',
  standalone: true,
  imports: [RecordingSearchComponent, RecordingListComponent],
  templateUrl: './recordings-container.component.html',
  styleUrl: './recordings-container.component.scss',
})
export class RecordingsContainerComponent {}

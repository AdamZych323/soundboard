import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecordingsService } from '../recordings.service';

@Component({
  selector: 'app-recording-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recording-search.component.html',
  styleUrl: './recording-search.component.scss',
})
export class RecordingSearchComponent {
  recordingsService = inject(RecordingsService);
}

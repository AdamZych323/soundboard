import { Component, inject } from '@angular/core';
import { RecordingsService } from './recordings.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-recordings-container',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './recordings-container.component.html',
  styleUrl: './recordings-container.component.scss',
})
export class RecordingsContainerComponent {
  private recordingsService = inject(RecordingsService);

  recordings = this.recordingsService.getAssetFiles();
}

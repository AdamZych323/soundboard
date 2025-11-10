import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RecordingsService {
  private http = inject(HttpClient);

  public getAssetFiles() {
    return this.http.get<string[]>(environment.recordings_path);
  }
}

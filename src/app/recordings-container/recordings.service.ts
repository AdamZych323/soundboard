import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable, take } from 'rxjs';
import { Recording } from './models/recording.model';

type FilterParams = {
    name?: string;
};

@Injectable({
    providedIn: 'root',
})
export class RecordingsService {
    #http = inject(HttpClient);

    allRecordings = toSignal(this.getRecordings().pipe(take(1)));
    filters = signal<FilterParams>({});
    filteredRecordings = computed(() => {
        const allRecordings = this.allRecordings();

        if (!allRecordings) {
            return;
        }

        return this.filterRecordings(allRecordings, this.filters());
    });

    private filterRecordings(recordings: Recording[], params: FilterParams) {
        return recordings.filter((r) =>
            r.name
                .toLowerCase()
                .includes(params.name?.toLocaleLowerCase() || '')
        );
    }

    private getRecordings(): Observable<Recording[]> {
        return this.#http
            .get<string[]>('assets/recording-list.json')
            .pipe(
                map((recordings) =>
                    recordings
                        .map((path) => new Recording(path))
                        .filter((r) => Boolean(r.name))
                )
            );
    }
}

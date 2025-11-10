import { signal } from '@angular/core';
import { BehaviorSubject, filter, take } from 'rxjs';

export class Recording {
    #audioElement: HTMLAudioElement | undefined;
    #isLoaded$ = new BehaviorSubject(false);
    #isPlaying = signal(false);
    #isLoading = signal(false);
    #progress = signal(0);
    public progress = this.#progress.asReadonly();
    public isPlaying = this.#isPlaying.asReadonly();
    public isLoading = this.#isLoading.asReadonly();
    public name: string;

    constructor(public path: string) {
        this.name = this.pathToName(path);
    }

    load() {
        if (this.#audioElement) {
            console.warn(
                'Attempted to load an audio that is already loaded.',
                this
            );
            return;
        }

        this.#audioElement = new Audio(this.path);
        this.#audioElement.load();
        this.#isLoading.set(true);
        this.#audioElement.onloadeddata = () => {
            this.#isLoading.set(false);
            this.#isLoaded$.next(true);
        };
        this.#audioElement.ontimeupdate = (event) => {
            this.updateProgress();
        };
    }

    play() {
        if (!this.#audioElement) {
            this.load();
        }

        this.#isLoaded$.pipe(filter(Boolean), take(1)).subscribe({
            next: () => {
                if (this.#isPlaying()) {
                    this.stopPlaying();
                }
                this.startPlaying();
            },
        });
    }

    private startPlaying() {
        if (!this.#audioElement) {
            return;
        }
        this.#isPlaying.set(true);
        this.#audioElement.play();
    }

    private stopPlaying() {
        if (!this.#audioElement) {
            return;
        }
        this.#isPlaying.set(false);
        this.#audioElement.pause();
        this.#audioElement.currentTime = 0;
    }

    private updateProgress() {
        if (!this.#audioElement || !this.#audioElement.duration) {
            return;
        }
        const current = this.#audioElement.currentTime;
        const total = this.#audioElement.duration;
        const progressPercent = Math.floor(((current / total) * 100) % 100);
        this.#progress.set(progressPercent);
    }

    private pathToName(path: string) {
        return path.match(/^assets\/recordings\/(.*)\.wav$/)?.[1] || '';
    }
}

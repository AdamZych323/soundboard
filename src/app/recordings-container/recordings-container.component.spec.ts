import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingsContainerComponent } from './recordings-container.component';

describe('RecordingsContainerComponent', () => {
    let component: RecordingsContainerComponent;
    let fixture: ComponentFixture<RecordingsContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RecordingsContainerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(RecordingsContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

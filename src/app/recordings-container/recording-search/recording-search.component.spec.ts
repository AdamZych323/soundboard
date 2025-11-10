import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingSearchComponent } from './recording-search.component';

describe('RecordingSearchComponent', () => {
  let component: RecordingSearchComponent;
  let fixture: ComponentFixture<RecordingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordingSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

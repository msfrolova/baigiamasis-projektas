import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMeetingFormComponent } from './log-meeting-form.component';

describe('LogMeetingFormComponent', () => {
  let component: LogMeetingFormComponent;
  let fixture: ComponentFixture<LogMeetingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogMeetingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogMeetingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

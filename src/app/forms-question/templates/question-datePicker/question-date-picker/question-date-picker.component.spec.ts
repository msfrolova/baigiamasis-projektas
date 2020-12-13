import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDatePickerComponent } from './question-date-picker.component';

describe('QuestionDatePickerComponent', () => {
  let component: QuestionDatePickerComponent;
  let fixture: ComponentFixture<QuestionDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

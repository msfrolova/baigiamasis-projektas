import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSelectOneComponent } from './question-select-one.component';

describe('QuestionSelectOneComponent', () => {
  let component: QuestionSelectOneComponent;
  let fixture: ComponentFixture<QuestionSelectOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSelectOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSelectOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

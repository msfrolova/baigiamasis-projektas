import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AllFormsModalComponent } from './all-forms-modal.component';

describe('AllFormsModalComponent', () => {
  let component: AllFormsModalComponent;
  let fixture: ComponentFixture<AllFormsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFormsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFormsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormCreationService } from '../services/form-creation.service';
import { Question } from '../types/types';

@Component({
  selector: 'app-forms-question',
  templateUrl: './forms-question.component.html',
  styleUrls: ['./forms-question.component.css'],
})
export class FormsQuestionComponent implements OnInit, OnDestroy {
  @Input() question: Question;
  @Input() form: FormGroup;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(public handleInput: FormCreationService) {}

  ngOnInit(): void {
    this.handleInput.subject
      .pipe(takeUntil(this.destroy$))
      .subscribe((date) => {
        if (date) {
          this.form.get('meeting_date')?.patchValue({ date });
        }
      });

    this.handleInput.topic.pipe(takeUntil(this.destroy$)).subscribe((topic) => {
      if (topic) {
        this.form.get('topic')?.patchValue({ topic });
      }
    });
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}

import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Subject } from 'rxjs';
import { Question } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class FormCreationService {
  subject = new Subject<any>();

  topic = new Subject<any>();
  constructor() {}

  toFormGroup(questions: Question[]) {
    const group: any = {};

    questions.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  datePicker(event: string) {
    this.subject.next(event);
  }

  selecTopic(event) {
    this.topic.next(event);
  }
}

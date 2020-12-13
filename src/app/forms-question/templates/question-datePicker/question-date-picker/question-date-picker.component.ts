import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormCreationService } from 'src/app/services/form-creation.service';
import { Question } from 'src/app/types/types';

@Component({
  selector: 'app-question-date-picker',
  templateUrl: './question-date-picker.component.html',
  styleUrls: ['./question-date-picker.component.css'],
})
export class QuestionDatePickerComponent implements OnInit {
  @Input() question: Question;
  constructor(
    public handleDate: FormCreationService,
    private datePipe: DatePipe
  ) {}
  myFilter;

  events: string[] = [];

  ngOnInit(): void {
    this.myFilter = (d: Date | null): boolean => {
      const day = (d || new Date()).getDay();
      return day !== 0 && day !== 6;
    };
  }
  addEvent(event: MatDatepickerInputEvent<any>) {
    let date = this.datePipe.transform(event.value, 'yyyy-MM-dd');
    this.handleDate.datePicker(date);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/types/types';

@Component({
  selector: 'app-question-radio',
  templateUrl: './question-radio.component.html',
  styleUrls: ['./question-radio.component.css'],
})
export class QuestionRadioComponent implements OnInit {
  @Input() question: Question;
  constructor() {}
  ngOnInit() {}
}

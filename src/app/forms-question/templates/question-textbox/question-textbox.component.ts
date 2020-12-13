import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Question } from 'src/app/types/types';

@Component({
  selector: 'app-question-textbox',
  templateUrl: './question-textbox.component.html',
  styleUrls: ['./question-textbox.component.css'],
})
export class QuestionTextboxComponent implements OnInit {
  @Input() question: Question;
  constructor() {}

  ngOnInit() {}
}

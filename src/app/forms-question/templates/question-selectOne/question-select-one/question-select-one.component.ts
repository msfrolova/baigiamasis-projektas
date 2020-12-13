import { Component, Input, OnInit } from '@angular/core';
import { FormCreationService } from 'src/app/services/form-creation.service';

@Component({
  selector: 'app-question-select-one',
  templateUrl: './question-select-one.component.html',
  styleUrls: ['./question-select-one.component.css'],
})
export class QuestionSelectOneComponent implements OnInit {
  @Input() question;
  events: string[] = [];

  constructor(public handleTopicInput: FormCreationService) {}

  ngOnInit(): void {}

  addEvent(event) {
    this.handleTopicInput.selecTopic(event.value);
  }
}

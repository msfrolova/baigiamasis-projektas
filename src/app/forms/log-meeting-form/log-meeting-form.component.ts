import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormCreationService } from 'src/app/services/form-creation.service';

@Component({
  selector: 'app-log-meeting-form',
  templateUrl: './log-meeting-form.component.html',
  styleUrls: ['./log-meeting-form.component.css'],
})
export class LogMeetingFormComponent implements OnInit {
  @Input() questions;
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormCreationService) {}

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}

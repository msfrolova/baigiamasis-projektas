import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { ControlType } from '../constants/constants';
import { RestService } from '../services/rest.service';
import { Form } from '../types/types';
import { AllFormsModalComponent } from './all-forms-modal/all-forms-modal.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  forms$: Observable<Form[]>;
  resolvedForms: any;
  public controlType = ControlType;
  private destroy$: Subject<void> = new Subject();
  key: string;
  questions;
  columns = 3;

  constructor(private restService: RestService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.forms$ = this.restService.getForms();
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AllFormsModalComponent, {
      width: '400px',
      height: '300px',
      data: this.forms$,
    });

    dialogRef.afterClosed().subscribe((key) => {
      this.key = key;
      this.columns = 1;
      this.getFormsQuestions(this.key);
    });
  }

  getFormsQuestions(a: string) {
    let selectedForm: Form;
    this.forms$.subscribe((forms) => {
      selectedForm = forms.find(({ key }) => key === a);
      selectedForm.sections.forEach(
        (section) => (this.questions = section.questions)
      );
    });
    return this.questions;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}

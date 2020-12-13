import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Form } from 'src/app/types/types';

@Component({
  selector: 'app-all-forms-modal',
  templateUrl: './all-forms-modal.component.html',
  styleUrls: ['./all-forms-modal.component.css'],
})
export class AllFormsModalComponent implements OnInit, OnDestroy {
  constructor(
    public dialogRef: MatDialogRef<AllFormsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public forms: any
  ) {}

  selectedForms: Form;
  destroy$: Subject<void> = new Subject();

  ngOnInit(): void {
    this.forms
      .pipe(takeUntil(this.destroy$))
      .subscribe((forms: Form) => (this.selectedForms = forms));
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
  }
}

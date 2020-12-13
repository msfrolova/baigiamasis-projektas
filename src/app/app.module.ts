import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsQuestionComponent } from './forms-question/forms-question.component';
import { QuestionTextboxComponent } from './forms-question/templates/question-textbox/question-textbox.component';
import { HttpClientModule } from '@angular/common/http';
import { LogMeetingFormComponent } from './forms/log-meeting-form/log-meeting-form.component';
import { CommonModule, DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { QuestionDatePickerComponent } from './forms-question/templates/question-datePicker/question-date-picker/question-date-picker.component';
import { QuestionRadioComponent } from './forms-question/templates/question-radio/question-radio/question-radio.component';
import { QuestionSelectOneComponent } from './forms-question/templates/question-selectOne/question-select-one/question-select-one.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AllFormsModalComponent } from './forms/all-forms-modal/all-forms-modal.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    QuestionTextboxComponent,
    LogMeetingFormComponent,
    FormsQuestionComponent,
    QuestionDatePickerComponent,
    QuestionRadioComponent,
    QuestionSelectOneComponent,
    FormsComponent,
    AllFormsModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  exports: [CommonModule, RouterModule],
})
export class AppModule {}

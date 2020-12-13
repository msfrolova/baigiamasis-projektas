import { ControlType } from '../constants/constants';

export interface Form {
  key: string;
  title?: string;
  sections?: Section[];
}

export interface Section {
  questions: Question[];
}

export interface Question {
  value: [];
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: ControlType;
  options: { key: string; value: string }[];
}

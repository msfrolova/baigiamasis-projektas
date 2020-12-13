import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Form } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/forms/"

  getForms(): Observable<Form[]> {
    return this.http.get<Form[]>(this.url);
  }
}

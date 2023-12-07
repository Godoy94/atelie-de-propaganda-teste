import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private formTypeSubject = new BehaviorSubject<string>('login');
  formType$ = this.formTypeSubject.asObservable();

  setFormType(type: string) {
    this.formTypeSubject.next(type);
  }
}

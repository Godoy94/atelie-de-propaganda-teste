import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'https://api.teste-frontend.ateliedepropaganda.com.br/v1/register';

  constructor(private http: HttpClient) {}

  registerUser(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}

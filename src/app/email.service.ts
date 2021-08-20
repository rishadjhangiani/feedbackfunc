import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(argparam: { replyto: string; name: string; message: string}) {
    return this.http
      .post("https://formspree.io/f/xbjqpzee", argparam)
      .pipe(catchError(this._errorHandler));
  }

  private _errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error || 'Server Error');
  }
}

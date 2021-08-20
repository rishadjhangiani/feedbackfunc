import { Injectable, NgModule } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class EmailService {

  constructor(private http:  Http) { }

  sendEmail(argparam: { from: string; to: any; name: any; text: any; }) {
    return this.http.post('/email', argparam)
    .map(res => res.json())
    .catch(this._errorHandler);
  }
  private _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error')
  }
  
}

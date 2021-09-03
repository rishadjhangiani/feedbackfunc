import { Component, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackPopComponent } from './feedback-pop/feedback-pop.component';

@Injectable({
  providedIn: 'root'
})

//@Component({
  //selector: 'FeedbackPopComponent',
//})
export class FeedbackServiceService {

  option1 : string;
  option2 : string;
  option3 : string;
  option4 : string;


  constructor(private ngbModal : NgbModal) { 
    this.option1 = "";
    this.option2 = "";
    this.option3 = "";
    this.option4 = "";
  }

  openFeedback(a: string, b: string, c: string, d: string) : Promise<any>{
    var modalRef = this.ngbModal.open(FeedbackPopComponent, {size: 'md', backdrop: 'static'});
    //abstract newData and add state
    this.data(a, b, c, d);
    console.log(a, b, c, d);
    return modalRef.result;
  }

  data(a: string, b: string, c: string, d: string) {
    console.log(a, b, c, d);
    return [a, b, c, d];
  }
}

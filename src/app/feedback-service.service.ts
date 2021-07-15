import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackPopComponent } from './feedback-pop/feedback-pop.component';

@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  constructor(private ngbModal : NgbModal) { }

  openFeedback() : Promise<any>{
    var modalRef = this.ngbModal.open(FeedbackPopComponent, {size: 'md', backdrop: 'static'});
    return modalRef.result;
  }
}

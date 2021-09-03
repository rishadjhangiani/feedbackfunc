import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FeedbackServiceService } from './feedback-service.service';
import * as email from 'nativescript-email';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackPopComponent } from './feedback-pop/feedback-pop.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{

  public _opened: boolean = false;
  public _toggleSidebar(): void {
  this._opened = !this._opened;
  }


  public _onBackdropClicked() : void {
    console.info('Backdrop clicked');
  }

  /**
   * 
   */
  constructor(private feedbackService: FeedbackServiceService, private router: Router, private ngbModal : NgbModal) {
  }

  btnClick() {
    this.router.navigateByUrl('/user');
  }

  showFeedback(a: string, b: string, c: string, d: string) {
    this.feedbackService.openFeedback(a, b, c, d).then(data => {
      console.log(data.option);
    },()=> {

    });
  }

  /*openFeedback(a: string, b: string, c: string, d: string) : Promise<any>{
    var modalRef = this.ngbModal.open(FeedbackPopComponent, {size: 'md', backdrop: 'static'});
    this.feedbackService.data(a, b, c, d);
    console.log(a, b, c, d);
    return modalRef.result;
  }*/
  title = 'angular-animations-site';
}


import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FeedbackServiceService } from './feedback-service.service';
import * as email from 'nativescript-email';
import { Router } from '@angular/router';



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
  constructor(private feedbackService: FeedbackServiceService, private router: Router) {
  }

  btnClick() {
    this.router.navigateByUrl('/user');
  }

  showFeedback() {
    this.feedbackService.openFeedback().then(data => {
      console.log(data.option);
    },()=> {

    });
  }
  title = 'angular-animations-site';
}


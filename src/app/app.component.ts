import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FeedbackServiceService } from './feedback-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
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
  constructor(private feedbackService: FeedbackServiceService) {
  }

  showFeedback() {
    this.feedbackService.openFeedback().then(result => {
      console.log(result);
    },()=> {

    });
  }
  title = 'angular-animations-site';
}


import { Component, Input, OnInit } from '@angular/core';
import { FeedbackServiceService } from '../feedback-service.service';


@Component({
  selector: 'app-feedback',
  templateUrl:'./feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  @Input() option1 = '';
  @Input() option2 = '';
  @Input() option3 = '';
  @Input() option4 = '';

  constructor(private feedbackService: FeedbackServiceService) { 
  }

  ngOnInit() {
  }

  showFeedback(option1: string, option2: string, option3: string, option4: string) {
    this.feedbackService.openFeedback(this.option1, this.option2, this.option3, this.option4).then(data => {
      console.log(data.option);
    },()=> {

    });
  }

}

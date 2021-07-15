import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-feedback-pop',
  templateUrl: './feedback-pop.component.html',
  styleUrls: ['./feedback-pop.component.css']
})
export class FeedbackPopComponent implements OnInit {

  constructor(public modal : NgbActiveModal) { }

  ngOnInit(): void {
  }

}

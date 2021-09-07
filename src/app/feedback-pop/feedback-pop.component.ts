import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import * as email from 'nativescript-email';
import * as nodemailer from 'nodemailer';
import { EmailService } from '../email.service';
import { FeedbackServiceService } from '../feedback-service.service';




@Component({
  selector: 'app-feedback-pop',
  templateUrl: './feedback-pop.component.html',
  styleUrls: ['./feedback-pop.component.css']
})
export class FeedbackPopComponent implements OnInit {

  static option1 = '';
  static option2 = '';
  static option3 = '';
  static option4 = '';

  FeedbackPopComponent = FeedbackPopComponent;
  

  modalForm = this.formBuilder.group({
    answer: ''
  })

  constructor(public modal : NgbActiveModal, private formBuilder : FormBuilder, private _emailService: EmailService, private feedbackservice: FeedbackServiceService) {

  }

  static data(a: string, b: string, c: string, d: string) {
    console.log(a, b, c, d);  
    this.option1 = a;
    this.option2 = b;
    this.option3 = c;
    this.option4 = d;
  }

 

/*
  newData() {
    //this is the main thing like where we are assigning the options to values
    let options = this.feedbackservice.data(this.option1, this.option2, this.option3, this.option4);
    this.option1 = options[0];
    this.option2 = options[1];
    this.option3 = options[2];
    this.option4 = options[3];
    console.log(this.option1);
    console.log(this.option2);
    console.log(this.option3);
    console.log(this.option4);
    return this.option1, this.option2, this.option3, this.option4;
}*/

  ngOnInit() {
 
  }


  //composeOptions: email.ComposeOptions;


  onSubmit(){
    this._emailService.sendEmail({
      replyto: 'rishadjhangiani@gmail.com',
      name: 'Risha',
      message:  this.modalForm.value,
    })
    .subscribe(
      () => {},
      err => console.log(err)
    ); 

    /*let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  	let info = await transporter.sendMail({
      from: "risha@risha.risha",
      to: "sarthaktexas@gmail.com",
      subject: "Hey Hi Hello",
      text: `I hate emails. ${this.modalForm.value}`,
    }).catch(e => console.error(e)); */
    console.log(this.modalForm.value);
    }




    /*email.available().then(available => {
      console.log(`The device email status is ${available}`);
      if(available) {
        email.compose(this.composeOptions).then(result => {
          console.log(result);
          if (result) {
            console.log(`Email was sent`);
          } else {
            console.log(`email was not sent`);
          }
        }).catch(error => console.error(error))
      }
    }).catch(error => console.error(error));

    console.log(this.modalForm.value);
    //email and handling
  } */

}



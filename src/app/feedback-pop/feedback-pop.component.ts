import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import * as email from 'nativescript-email';
import * as nodemailer from 'nodemailer';
import { EmailService } from '../email.service';



@Component({
  selector: 'app-feedback-pop',
  templateUrl: './feedback-pop.component.html',
  styleUrls: ['./feedback-pop.component.css']
})
export class FeedbackPopComponent implements OnInit {

  modalForm = this.formBuilder.group({
    answer: ''
  })

  constructor(public modal : NgbActiveModal, private formBuilder : FormBuilder, private _emailService: EmailService) {
    /*this.composeOptions= {
      subject: 'test email',
      body: 'test email',
      to: ['risha.j@optio3.com'],
    } */
  }

  ngOnInit(): void {
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

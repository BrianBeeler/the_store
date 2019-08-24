import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewFigure } from 'src/app/shared/models/viewFigure';
import { NgForm } from '@angular/forms';
import { HTTPService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
})
export class AboutComponent implements OnInit {

  constructor(private httpService: HTTPService) { }

  @ViewChild('f', {static: false }) contactUsForm: NgForm;

  shopPhotos: ViewFigure[] = [
    new ViewFigure('assets/images/grandads_shop-optimized.jpg', 'Grandad\'s Woodwork', 'grandads-woodwork')
  ];

  formDisabled;
  messageSent = false;
  messageError = false;

  onSubmit(form) {
    this.messageSent = false;
    this.messageError = false;
    this.formDisabled = true;
    const userEmail = this.contactUsForm.value.email;
    const userName  = this.contactUsForm.value.name;
    const message = this.contactUsForm.value.message;

    const emailMessage = `<h2> New Inquiry from ${userName} using TheStoreCrafts.com</h2>
                          <p>"${message}"<br>
                          This person can be reached at: ${userEmail}</p>`;
                          // ; // New Inquiry from ' + userName + ' (' + userEmail + '):' + message;

    this.httpService.sendEmail('Inquiry about The Store', emailMessage)
    .subscribe({
      next: onSuccess.bind(this),
      error: onError.bind(this),
      complete: onComplete.bind(this)
    });

    function onSuccess(data: any) {
      this.messageSent = true;
    }

    function onError(error: any) {
      console.error(error);
      this.messageError = true;
    }

    function onComplete() {
      this.formDisabled = false;
      form.reset();
    }

  }

  ngOnInit() {
  }

}

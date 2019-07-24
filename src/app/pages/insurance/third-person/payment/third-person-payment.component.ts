import {Component} from '@angular/core';

@Component({
  selector: 'ngx-ref-insurance-third-person-payment',
  templateUrl: './third-person-payment.component.html',
})
export class ThirdPersonPaymentComponent {

  constructor() {}
  paymentType = 'cash';
  numOfChecks: string = '1';
  prePayment = '5,600,000';
}

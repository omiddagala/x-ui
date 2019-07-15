import {Component} from '@angular/core';
import {MyRoutingService} from '../../../commons/my.routing.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'ngx-ref-insurance-third-person-payment',
  templateUrl: './third-person-payment.component.html',
})
export class ThirdPersonPaymentComponent {

  constructor() {}
  paymentType = 'cash';
  numOfChecks: number = 0;
  prePayment = '5,600,000';
}

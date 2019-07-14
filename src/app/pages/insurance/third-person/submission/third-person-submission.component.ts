import { Component } from '@angular/core';
import {MyRoutingService} from '../../../commons/my.routing.service';


@Component({
  selector: 'ngx-ref-insurance-third-person-submission',
  styleUrls: ['./third-person-submission.component.scss'],
  templateUrl: './third-person-submission.component.html',
})
export class ThirdPersonSubmissionComponent {

  constructor(private myRoutingService: MyRoutingService) {}


  onSubmit() {
    this.myRoutingService.gotoWhereClicked('/pages/insurance/third-person-companies');
  }

  gotoWhereClicked(adr) {
    this.myRoutingService.gotoWhereClicked(adr);
  }

}

import { Component } from '@angular/core';
import {MyRoutingService} from '../../../commons/my.routing.service';
import {SmsPopupComponent} from './sms-popup/sms-popup.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'ngx-ref-insurance-inquiry',
  styleUrls: ['./inquiry.component.scss'],
  templateUrl: './inquiry.component.html',
})
export class InquiryComponent {

  constructor(private myRoutingService: MyRoutingService, private dialogService: NbDialogService) {}

  openSmsInquiryPopup() {
    this.dialogService.open(SmsPopupComponent);
      // .onClose.subscribe(name => alert(name));
  }

  gotoWhereClicked(adr) {
    this.myRoutingService.gotoWhereClicked(adr);
  }

}

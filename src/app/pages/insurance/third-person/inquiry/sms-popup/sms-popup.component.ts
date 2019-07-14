import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-ref-third-party-sms-popup',
  templateUrl: './sms-popup.component.html',
  styleUrls: ['sms-popup.component.scss'],
})
export class SmsPopupComponent {

  constructor(protected ref: NbDialogRef<SmsPopupComponent>) {}

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}

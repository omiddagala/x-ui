import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-plain-more-info-popup',
  templateUrl: './more-info-popup.html',
})
export class MoreInfoPopupComponent {

  constructor(protected ref: NbDialogRef<MoreInfoPopupComponent>) {}

  cancel() {
    this.ref.close();
  }

}

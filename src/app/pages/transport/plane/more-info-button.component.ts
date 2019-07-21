import {Component, Input} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';
import {NbComponentStatus, NbDialogService} from '@nebular/theme';
import {MoreInfoPopupComponent} from './more-info-popup/more-info-popup.component';


@Component({
  template: '<button nbButton [status]="status" hero (click)="navigateToSomeRoute()">مشاهده</button>',
})
export class MoreInfoButtonComponent implements ViewCell {
  @Input() status: NbComponentStatus = 'info';
  constructor(private dialogService: NbDialogService) { }
  @Input() value: string; // This will be the value passed from the pathID column (see next code block)
  @Input() rowData: any;
  navigateToSomeRoute() {
    this.dialogService.open(MoreInfoPopupComponent);
  }
}

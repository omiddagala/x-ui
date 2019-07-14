import {Component, Input} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';
import {Router} from '@angular/router';
import { NbComponentStatus } from '@nebular/theme';


@Component({
  template: '<button nbButton [status]="status" hero (click)="navigateToSomeRoute()">انتخاب کنید</button>',
})
export class CustomButtonComponent implements ViewCell {
  @Input() status: NbComponentStatus = 'success';
  constructor(private router: Router) { }
  @Input() value: string; // This will be the value passed from the pathID column (see next code block)
  @Input() rowData: any;
  navigateToSomeRoute() {
    // this.router.navigate(['/some/path']);
    alert(this.rowData.id);
  }
}

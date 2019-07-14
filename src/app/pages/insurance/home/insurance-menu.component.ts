import { Component } from '@angular/core';
import {MyRoutingService} from '../../commons/my.routing.service';

@Component({
  selector: 'ngx-ref-insurance-menu',
  styleUrls: ['../../commons/menu.scss'],
  templateUrl: './insurance-menu.component.html',
})
export class InsuranceMenuComponent {

  constructor(private myRoutingService: MyRoutingService) {}

  gotoWhereClicked(adr) {
    this.myRoutingService.gotoWhereClicked(adr);
  }

}

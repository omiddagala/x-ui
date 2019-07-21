import { Component } from '@angular/core';
import {MyRoutingService} from '../../commons/my.routing.service';

@Component({
  selector: 'ngx-transport-menu',
  styleUrls: ['../../commons/menu.scss'],
  templateUrl: './transport-menu.component.html',
})
export class TransportMenuComponent {

  constructor(private myRoutingService: MyRoutingService) {}

  gotoWhereClicked(adr) {
    this.myRoutingService.gotoWhereClicked(adr);
  }

}

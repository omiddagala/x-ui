import { Component } from '@angular/core';
import {MyRoutingService} from '../commons/my.routing.service';

@Component({
  selector: 'ngx-ref-home',
  styleUrls: ['../commons/menu.scss', './home.component.scss'],
  templateUrl: 'home.component.html',
})
export class HomeComponent {


  constructor(private myRoutingService: MyRoutingService) {}

  gotoWhereClicked(adr) {
    this.myRoutingService.gotoWhereClicked(adr);
  }

}

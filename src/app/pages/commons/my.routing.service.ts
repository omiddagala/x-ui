import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class MyRoutingService {

  constructor(private router: Router) {}

  gotoWhereClicked(adr) {
    this.router.navigate([adr]);  // define your component where you want to go
  }
}

import {Component} from '@angular/core';

import { Globals } from './commons/globals';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss', './commons/tables.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  constructor(private globals: Globals) {}

  menu = this.globals.getMenu();

}

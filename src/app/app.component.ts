/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Globals} from './pages/commons/globals';


@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private location: Location, private router: Router, private globals: Globals) {
  }

  ngOnInit(): void {
    const menu = localStorage.getItem('menu');
    if (menu)
      this.globals.setMenu(JSON.parse(menu));
    if (this.location.path() === '/' || this.location.path() === '') {
      this.router.navigate(['/login']);
    }
    // this.router.navigate(['/login']);
  }
}

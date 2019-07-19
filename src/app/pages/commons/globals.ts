import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

  constructor() {}
  private menu;
  getMenu() {
    return this.menu;
  }
  setMenu(value) {
    this.menu = value;
  }
}

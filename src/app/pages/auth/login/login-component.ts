import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login-component.scss'],
  templateUrl: './login-component.html',
})
export class NgxLoginComponent extends NbLoginComponent {

  user: any;
  myLogin() {
    this.router.navigate(['/pages/home']);
  }
}

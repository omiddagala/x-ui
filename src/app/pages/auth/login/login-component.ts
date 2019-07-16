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
    if (this.user.username === 'admin') {
      this.router.navigate(['/pages/admin']);
    } else {
      this.router.navigate(['/pages/home']);
    }
  }
}

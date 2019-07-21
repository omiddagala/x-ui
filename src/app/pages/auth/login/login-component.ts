import {ChangeDetectorRef, Component} from '@angular/core';
import {NbAuthService, NbLoginComponent} from '@nebular/auth';
import {Router} from '@angular/router';
import {Globals} from '../../commons/globals';

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login-component.scss'],
  templateUrl: './login-component.html',
})
export class NgxLoginComponent extends NbLoginComponent {

  constructor(service: NbAuthService, cd: ChangeDetectorRef,
              router: Router, private globals: Globals) {
    super(service, {}, cd, router);
  }
  user: any;
  myLogin() {
    if (this.user.username === 'admin') {
      this.globals.setMenu([
        {
          title: 'گزارشات',
          icon: 'pie-chart-outline',
          link: '/pages/admin/reports',
        },
        {
          title: 'مدیریت محصول',
          icon: 'home-outline',
          link: '/pages/admin/product',
          home: true,
        },
        {
          title: 'مدیریت کاربران',
          icon: 'keypad-outline',
          link: '/pages/admin/users',
        },
        {
          title: 'خروج',
          icon: 'lock-outline',
          link: '/login',
        },
      ]);
    } else {
      this.globals.setMenu([
        {
          title: 'خانه',
          icon: 'home-outline',
          link: '/pages/home',
          home: true,
        },
        {
          title: 'قوانین و مقررات',
          icon: 'edit-2-outline',
          link: '#',
        },
        {
          title: 'راهنما',
          icon: 'map-outline',
          link: '#',
        },
        {
          title: 'خروج',
          icon: 'lock-outline',
          link: '/login',
        },
      ]);
    }
    localStorage.setItem('menu', JSON.stringify(this.globals.getMenu()));
    if (this.user.username === 'admin') {
      this.router.navigate(['/pages/admin/reports']);
    } else {
      this.router.navigate(['/pages/home']);
    }
  }
}

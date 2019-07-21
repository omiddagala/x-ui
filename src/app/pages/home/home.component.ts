import {AfterViewInit, Component} from '@angular/core';
import {MyRoutingService} from '../commons/my.routing.service';
import {NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService} from '@nebular/theme';
import {Globals} from '../commons/globals';

@Component({
  selector: 'ngx-ref-home',
  styleUrls: ['../commons/menu.scss', './home.component.scss'],
  templateUrl: 'home.component.html',
})
export class HomeComponent implements AfterViewInit {

  destroyByClick = true;
  duration = 3000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_LEFT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  constructor(private myRoutingService: MyRoutingService, private toastrService: NbToastrService,
              private globals: Globals) {}

  gotoWhereClicked(adr) {
    this.myRoutingService.gotoWhereClicked(adr);
  }

  ngAfterViewInit(): void {
    if (this.globals.isComingFromLogin) {
      this.showToast('پیام', 'شما موفق به ورود به سیستم شدید');
      this.globals.isComingFromLogin = false;
    }
  }


  private showToast(title: string, body: string) {
    const config = {
      status: this.status,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';

    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }

}

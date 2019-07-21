import { Component } from '@angular/core';
import {MyRoutingService} from '../../commons/my.routing.service';
import {LocalDataSource} from 'ng2-smart-table';
import {BuyTicketButtonComponent} from './buy-ticket-button.component';

@Component({
  selector: 'ngx-transport-plane',
  templateUrl: './plane-search.html',
})
export class PlaneSearchComponent {

  search() {
    const data = [{
      line: '/assets/images/transport/plane/iranair.png',
      home: 'تهران',
      destination: 'شیراز',
      departure: 'چهارشنبه ۵ مرداد ۲۱:۳۰',
      arrival: 'پنجشنبه ۶ مرداد ۱:۱۵',
      type: 'سیستمی',
    },
      {
        line: '/assets/images/transport/plane/ata.png',
        home: 'تهران',
        destination: 'شیراز',
        departure: 'چهارشنبه ۵ مرداد ۲۱:۳۰',
        arrival: 'پنجشنبه ۶ مرداد ۱:۱۵',
        type: 'سیستمی',
      },
      {
        line: '/assets/images/transport/plane/kaspian.png',
        home: 'تهران',
        destination: 'شیراز',
        departure: 'چهارشنبه ۵ مرداد ۲۱:۳۰',
        arrival: 'پنجشنبه ۶ مرداد ۱:۱۵',
        type: 'سیستمی',
      }];
    this.source.load(data);
  }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    noDataMessage: 'نتیجه ای یافت نشد',
    columns: {
      customActions: {
        title: '',
        type: 'custom',
        renderComponent: BuyTicketButtonComponent,
        filter: false,
      },
      more: {
        title: '',
        type: 'html',
        valuePrepareFunction: () => {
          return '<a>اطلاعات بیشتر</a>'; },
        filter: false,
      },
      type: {
        title: 'نوع',
        type: 'string',
        filter: {
          type: 'list',
          config: {
            list: [{ value: 'سیستمی', title: 'سیستمی' }, { value: 'چارتر', title: 'چارتر' }],
          },
        },
      },
      arrival: {
        title: 'تاریخ ورود',
        type: 'string',
      },
      departure: {
        title: 'تاریخ عزیمت',
        type: 'string',
      },
      destination: {
        title: 'مقصد',
        type: 'string',
      },
      home: {
        title: 'مبدا',
        type: 'string',
      },
      line: {
        title: 'خط هوایی',
        type: 'html',
        valuePrepareFunction: (line: string) => {
          return '<img width="100px" src="' + line + '" />'; },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private myRoutingService: MyRoutingService) {
  }

  gotoWhereClicked(adr) {
    this.myRoutingService.gotoWhereClicked(adr);
  }

}

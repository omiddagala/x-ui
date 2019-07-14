import { Component } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {CustomButtonComponent} from './custom-button.component';

@Component({
  selector: 'ngx-ref-insurance-third-person',
  styleUrls: ['third-person.scss'],
  templateUrl: './third-person-companies.component.html',
})
export class ThirdPersonCompaniesComponent {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      customActions: {
        title: 'سفارش بیمه',
        type: 'custom',
        renderComponent: CustomButtonComponent,
        filter: false,
      },
      customerFeedback: {
        title: 'نظر مشتریان',
        type: 'html',
        valuePrepareFunction: (rating: string) => {
          return '<img width="100px" src="' + rating + '" />'; },
        filter: false,
      },
      putComment: {
        title: 'نظر شما',
        type: 'html',
        valuePrepareFunction: (text: string) => {
          return '<a>' + text + '</a>'; },
        filter: false,
      },
      wealth: {
        title: 'توانگری مالی',
        type: 'html',
        valuePrepareFunction: (rating: string) => {
          return '<img width="100px" src="' + rating + '" />'; },
        filter: false,
      },
      marketShare: {
        title: 'سهم بازار',
        type: 'string',
        filter: false,
      },
      offPrice: {
        title: 'قیمت باتخفیف',
        type: 'string',
        filter: false,
      },
      basePrice: {
        title: 'قیمت پایه',
        type: 'string',
        filter: false,
      },
      logo: {
        title: 'بیمه گر',
        type: 'html',
        valuePrepareFunction: (logo: string) => {
          return '<img width="50px" src="' + logo + '" />'; },
        filter: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {
    const data = [{
      id: 100,
      customerFeedback: '/assets/images/rating.png',
      putComment: 'کلیک کنید',
      wealth: '/assets/images/rating.png',
      marketShare: '4',
      offPrice: '12,770,000',
      basePrice: '12,773,205',
      logo: '/assets/images/insurance/asia.png',
    }, {
      id: 101,
      customerFeedback: '/assets/images/rating.png',
      putComment: 'کلیک کنید',
      wealth: '/assets/images/rating.png',
      marketShare: '5',
      offPrice: '12,770,000',
      basePrice: '12,773,205',
      logo: '/assets/images/insurance/dana.png',
    }, {
      id: 102,
      customerFeedback: '/assets/images/rating.png',
      putComment: 'کلیک کنید',
      wealth: '/assets/images/rating.png',
      marketShare: '8',
      offPrice: '12,770,000',
      basePrice: '12,773,205',
      logo: '/assets/images/insurance/iran.png',
    }, {
      id: 103,
      customerFeedback: '/assets/images/rating.png',
      putComment: 'کلیک کنید',
      wealth: '/assets/images/rating.png',
      marketShare: '8',
      offPrice: '12,770,000',
      basePrice: '12,773,205',
      logo: '/assets/images/insurance/ma.png',
    }, {
      id: 104,
      customerFeedback: '/assets/images/rating.png',
      putComment: 'کلیک کنید',
      wealth: '/assets/images/rating.png',
      marketShare: '6',
      offPrice: '12,770,000',
      basePrice: '12,773,205',
      logo: '/assets/images/insurance/pasargad.png',
    }, {
      id: 105,
      customerFeedback: '/assets/images/rating.png',
      putComment: 'کلیک کنید',
      wealth: '/assets/images/rating.png',
      marketShare: '2',
      offPrice: '12,770,000',
      basePrice: '12,773,205',
      logo: '/assets/images/insurance/sarmad.png',
    }];
    this.source.load(data);
  }
}

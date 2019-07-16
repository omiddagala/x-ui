import {Component} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableData} from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-admin-product-list',
  templateUrl: './list.component.html',
})
export class AdminProductListComponent {

  settings = {
    actions: {
      columnTitle: 'عملیات',
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      confirmSave: true,
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
    },
    columns: {
      title: {
        title: 'عنوان',
        type: 'string',
      },
      icon: {
        title: 'آیکون',
        type: 'string',
      },
      parent: {
        title: 'منوی پدر',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = [{
      title: 'بیمه',
      icon: 'assets/images/insurance.png',
      parent: '-',
    },
      {
        title: 'حمل و نقل',
        icon: 'assets/images/transport.png',
        parent: '-',
      },
      {
        title: 'بیمه شخص ثالث',
        icon: 'assets/images/insurance/iran.png',
        parent: 'بیمه',
      },
      {
        title: 'استعلام بیمه شخص ثالث',
        icon: 'assets/images/insurance/inquiry.png',
        parent: 'بیمه شخص ثالث',
      },
      {
        title: 'بلیط هواپیما',
        icon: 'assets/images/transport/airlines.png',
        parent: 'حمل و نقل',
      }];
    this.source.load(data);
  }

  onEdit(event) {
    // alert(event.data.firstName);
    event.confirm.resolve();
  }

}

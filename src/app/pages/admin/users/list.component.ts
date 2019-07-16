import {Component} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableData} from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-admin-users-list',
  templateUrl: './list.component.html',
})
export class AdminUsersListComponent {

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
      name: {
        title: 'نام',
        type: 'string',
      },
      family: {
        title: 'نام خانوادگی',
        type: 'string',
      },
      username: {
        title: 'نام کاربری',
        type: 'string',
      },
      role: {
        title: 'نقش',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = [{
      name: 'علیرضا',
      family: 'قایخلو',
      username: 'a_ghayekhloo',
      role: 'admin',
    },
      {
        name: 'فرزین',
        family: 'کاظمی نژاد',
        username: 'f_kazeminezhad',
        role: 'admin',
      },
      {
        name: 'مرتضی',
        family: 'سیف',
        username: 'm_seyf',
        role: 'admin',
      },
      {
        name: 'امید',
        family: 'جواهری',
        username: 'o_javaheri',
        role: 'user',
      }];
    this.source.load(data);
  }

  onEdit(event) {
    // alert(event.data.firstName);
    event.confirm.resolve();
  }

}

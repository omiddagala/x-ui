import {NgModule} from '@angular/core';
import {MyRoutingService} from '../commons/my.routing.service';
import {AdminProductListComponent} from './products/list.component';
import {AdminRoutingModule} from './admin-routing.module';
import {NbCardModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {AdminUsersListComponent} from './users/list.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    AdminProductListComponent,
    AdminUsersListComponent,
  ],
  providers: [
    MyRoutingService,
  ],
})
export class AdminModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminProductListComponent} from './products/list.component';
import {AdminUsersListComponent} from './users/list.component';
import {EchartsComponent} from './reports/echarts.component';


const routes: Routes = [{
  path: 'product',
  component: AdminProductListComponent,
},
  {
    path: 'users',
    component: AdminUsersListComponent,
  },
  {
    path: 'reports',
    component: EchartsComponent,
  },
  {
    path: '',
    redirectTo: 'reports',
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}

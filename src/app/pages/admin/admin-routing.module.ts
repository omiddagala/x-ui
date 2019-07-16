import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminProductListComponent} from './products/list.component';
import {AdminUsersListComponent} from './users/list.component';


const routes: Routes = [{
  path: '',
  component: AdminProductListComponent,
},
  {
    path: 'users',
    component: AdminUsersListComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}

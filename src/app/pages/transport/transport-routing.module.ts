import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TransportMenuComponent} from './home/transport-menu.component';
import {PlaneSearchComponent} from './plane/plane-search.component';


const routes: Routes = [{
  path: '',
  component: TransportMenuComponent,
},
  {
    path: 'plane',
    component: PlaneSearchComponent,
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportRoutingModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InsuranceMenuComponent} from './home/insurance-menu.component';
import {ThirdPersonComponent} from './third-person/third-person.component';


const routes: Routes = [{
  path: '',
  component: InsuranceMenuComponent,
}, {
  path: 'third-person',
  component: ThirdPersonComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceRoutingModule {
}

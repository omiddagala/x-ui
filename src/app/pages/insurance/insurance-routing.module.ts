import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InsuranceMenuComponent} from './home/insurance-menu.component';
import {ThirdPersonComponent} from './third-person/list/third-person.component';
import {InquiryComponent} from './third-person/inquiry/inquiry.component';


const routes: Routes = [{
  path: '',
  component: InsuranceMenuComponent,
}, {
  path: 'third-person',
  component: ThirdPersonComponent,
}, {
  path: 'inquiry',
  component: InquiryComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceRoutingModule {
}

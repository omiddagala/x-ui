import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InsuranceMenuComponent} from './home/insurance-menu.component';
import {ThirdPersonCompaniesComponent} from './third-person/list/third-person-companies.component';
import {InquiryComponent} from './third-person/inquiry/inquiry.component';


const routes: Routes = [{
  path: '',
  component: InsuranceMenuComponent,
}, {
  path: 'third-person-companies',
  component: ThirdPersonCompaniesComponent,
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

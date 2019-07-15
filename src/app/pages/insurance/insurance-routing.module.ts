import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InsuranceMenuComponent} from './home/insurance-menu.component';
import {ThirdPersonCompaniesComponent} from './third-person/list/third-person-companies.component';
import {InquiryComponent} from './third-person/inquiry/inquiry-component';
import {ThirdPersonSubmissionComponent} from './third-person/submission/third-person-submission.component';
import {ThirdPersonPaymentComponent} from './third-person/payment/third-person-payment.component';


const routes: Routes = [{
  path: '',
  component: InsuranceMenuComponent,
}, {
  path: 'third-person-companies',
  component: ThirdPersonCompaniesComponent,
}, {
  path: 'inquiry',
  component: InquiryComponent,
}, {
  path: 'third-person-submission',
  component: ThirdPersonSubmissionComponent,
}, {
  path: 'third-person-payment',
  component: ThirdPersonPaymentComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceRoutingModule {
}

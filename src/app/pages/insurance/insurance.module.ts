import {NgModule} from '@angular/core';
import {InsuranceMenuComponent} from './home/insurance-menu.component';
import {InsuranceRoutingModule} from './insurance-routing.module';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbStepperModule,
} from '@nebular/theme';
import {ThirdPersonCompaniesComponent} from './third-person/list/third-person-companies.component';
import {MyRoutingService} from '../commons/my.routing.service';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CustomButtonComponent} from './third-person/list/custom-button.component';
import {InquiryComponent} from './third-person/inquiry/inquiry.component';
import {SmsPopupComponent} from './third-person/inquiry/sms-popup/sms-popup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThirdPersonSubmissionComponent} from './third-person/submission/third-person-submission.component';
import {ThirdPersonPaymentComponent} from './third-person/payment/third-person-payment.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    InsuranceRoutingModule,
    NbCardModule,
    NbAlertModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbCheckboxModule,
    NbDialogModule.forChild(),
    FormsModule,
    NbStepperModule,
    ReactiveFormsModule,
    CommonModule,
    NbRadioModule,
  ],
  declarations: [
    InsuranceMenuComponent,
    ThirdPersonCompaniesComponent,
    CustomButtonComponent,
    InquiryComponent,
    SmsPopupComponent,
    ThirdPersonSubmissionComponent,
    ThirdPersonPaymentComponent,
  ],
  providers: [
    MyRoutingService,
  ],
  entryComponents: [
    CustomButtonComponent,
    SmsPopupComponent,
  ],
})
export class InsuranceModule { }

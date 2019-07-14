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
  NbSelectModule,
} from '@nebular/theme';
import {ThirdPersonComponent} from './third-person/list/third-person.component';
import {MyRoutingService} from '../commons/my.routing.service';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CustomButtonComponent} from './third-person/list/custom-button.component';
import {InquiryComponent} from './third-person/inquiry/inquiry.component';
import {SmsPopupComponent} from './third-person/inquiry/sms-popup/sms-popup.component';

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
  ],
  declarations: [
    InsuranceMenuComponent,
    ThirdPersonComponent,
    CustomButtonComponent,
    InquiryComponent,
    SmsPopupComponent,
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

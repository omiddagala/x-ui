import {NgModule} from '@angular/core';
import {InsuranceMenuComponent} from './home/insurance-menu.component';
import {InsuranceRoutingModule} from './insurance-routing.module';
import {NbAlertModule, NbButtonModule, NbCardModule} from '@nebular/theme';
import {ThirdPersonComponent} from './third-person/third-person.component';
import {MyRoutingService} from '../commons/my.routing.service';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CustomButtonComponent} from './third-person/custom-button.component';

@NgModule({
  imports: [
    InsuranceRoutingModule,
    NbCardModule,
    NbAlertModule,
    Ng2SmartTableModule,
    NbButtonModule,
  ],
  declarations: [
    InsuranceMenuComponent,
    ThirdPersonComponent,
    CustomButtonComponent,
  ],
  providers: [
    MyRoutingService,
  ],
  entryComponents: [CustomButtonComponent],
})
export class InsuranceModule { }

import {NgModule} from '@angular/core';
import {TransportRoutingModule} from './transport-routing.module';
import {TransportMenuComponent} from './home/transport-menu.component';
import {PlaneSearchComponent} from './plane/plane-search.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbInputModule,
  NbSelectModule, NbTabsetModule,
} from '@nebular/theme';
import {BuyTicketButtonComponent} from './plane/buy-ticket-button.component';
import {MoreInfoButtonComponent} from './plane/more-info-button.component';
import {MoreInfoPopupComponent} from './plane/more-info-popup/more-info-popup.component';

@NgModule({
  imports: [
    TransportRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbAlertModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    NbDialogModule.forChild(),
    NbTabsetModule,
  ],
  declarations: [
    TransportMenuComponent,
    PlaneSearchComponent,
    BuyTicketButtonComponent,
    MoreInfoButtonComponent,
    MoreInfoPopupComponent,
  ],
  entryComponents: [
    BuyTicketButtonComponent,
    MoreInfoButtonComponent,
    MoreInfoPopupComponent,
  ],
})
export class TransportModule { }

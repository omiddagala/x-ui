import {NgModule} from '@angular/core';
import {TransportRoutingModule} from './transport-routing.module';
import {TransportMenuComponent} from './home/transport-menu.component';
import {PlaneSearchComponent} from './plane/plane-search.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbAlertModule, NbButtonModule, NbCardModule, NbInputModule, NbSelectModule} from '@nebular/theme';
import {BuyTicketButtonComponent} from './plane/buy-ticket-button.component';

@NgModule({
  imports: [
    TransportRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbAlertModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
  ],
  declarations: [
    TransportMenuComponent,
    PlaneSearchComponent,
    BuyTicketButtonComponent,
  ],
  entryComponents: [
    BuyTicketButtonComponent,
  ],
})
export class TransportModule { }

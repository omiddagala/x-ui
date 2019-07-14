import {NgModule} from '@angular/core';
import {NbAlertModule, NbCardModule} from '@nebular/theme';
import {HomeComponent} from './home.component';
import {MyRoutingService} from '../commons/my.routing.service';

@NgModule({
  imports: [
    NbCardModule,
    NbAlertModule,
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
    MyRoutingService,
  ],
})
export class HomeModule { }

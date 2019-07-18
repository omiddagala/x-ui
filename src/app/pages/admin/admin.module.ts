import {NgModule} from '@angular/core';
import {MyRoutingService} from '../commons/my.routing.service';
import {AdminProductListComponent} from './products/list.component';
import {AdminRoutingModule} from './admin-routing.module';
import {NbCardModule, NbSelectModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {AdminUsersListComponent} from './users/list.component';
import {ChartsModule} from '../charts/charts.module';
import {ChartModule} from 'angular2-chartjs';
import {EchartsComponent} from './reports/echarts.component';
import {EchartsMultipleXaxisComponent} from './reports/echarts-multiple-xaxis.component';
import {EchartsPieComponent} from './reports/echarts-pie.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {EchartsBarComponent} from './reports/echarts-bar.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    AdminRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    ChartsModule,
    ChartModule,
    NgxEchartsModule,
    NbSelectModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    AdminProductListComponent,
    AdminUsersListComponent,
    EchartsComponent,
    EchartsBarComponent,
    EchartsMultipleXaxisComponent,
    EchartsPieComponent,
  ],
  providers: [
    MyRoutingService,
  ],
})
export class AdminModule { }

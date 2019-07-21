import {NgModule} from '@angular/core';
import {MyRoutingService} from '../commons/my.routing.service';
import {AdminProductListComponent} from './products/list.component';
import {AdminRoutingModule} from './admin-routing.module';
import {NbCardModule, NbSelectModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {AdminUsersListComponent} from './users/list.component';
import {ChartModule} from 'angular2-chartjs';
import {EchartsComponent} from './reports/echarts.component';
import {EchartsMultipleXaxisComponent} from './reports/echarts-multiple-xaxis.component';
import {EchartsPieComponent} from './reports/echarts-pie.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {EchartsBarComponent} from './reports/echarts-bar.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {EchartsAreaStackComponent} from './reports/echarts-area-stack.component';
import {EchartsBarAnimationComponent} from './reports/echarts-bar-animation.component';
import {EchartsRadarComponent} from './reports/echarts-radar.component';
import {EchartsLineComponent} from './reports/echarts-line.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
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
    EchartsAreaStackComponent,
    EchartsBarAnimationComponent,
    EchartsRadarComponent,
    EchartsLineComponent,
  ],
  providers: [
    MyRoutingService,
  ],
})
export class AdminModule { }

import { Component} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'ngx-echarts',
  styleUrls: ['./echarts.component.scss'],
  templateUrl: './echarts.component.html',
})
export class EchartsComponent {

  states = [{title: 'تهران', value: 'tehran',
    cities: [{title: 'تهران', value: 'tehran'}, {title: 'شهریار', value: 'shahriar'},
      {title: 'اسلامشهر', value: 'eslamshahr'}, {title: 'بومهن', value: 'bomehen'}]},
    {title: 'فارس', value: 'fars',
      cities: [{title: 'شیراز', value: 'shiraz'}, {title: 'مرودشت', value: 'marvdasht'},
        {title: 'کازرون', value: 'kazeron'}, {title: 'فسا', value: 'fasa'}]}];
  selectedStateModel = 'tehran';
  selectedState = this.states[0];
  selectedCityModel = 'tehran';
  selectedCity: any = this.states[0].cities[0];
  private eventsSubject: Subject<any> = new Subject<any>();


  selectedStateChanged () {
    for (let i = 0 ; i < this.states.length ; i++) {
      if (this.states[i].value === this.selectedStateModel) {
        this.selectedState = this.states[i];
        this.selectedCityModel = this.selectedState.cities[0].value;
        break;
      }
    }
    this.eventsSubject.next({ state: this.selectedStateModel, city: this.selectedCityModel });
  }
  selectedCityChanged () {
    this.eventsSubject.next({ state: this.selectedStateModel, city: this.selectedCityModel });
  }
}

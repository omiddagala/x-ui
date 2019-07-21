import {AfterViewInit, Component} from '@angular/core';
import {Subject} from 'rxjs';
import {NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'ngx-echarts',
  styleUrls: ['./echarts.component.scss'],
  templateUrl: './echarts.component.html',
})
export class EchartsComponent implements AfterViewInit {
  destroyByClick = true;
  duration = 3000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_LEFT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  constructor(private toastrService: NbToastrService) {}
  ngAfterViewInit(): void {
    this.showToast('پیام', 'شما موفق به ورود به سیستم شدید');
  }

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
  eventsSubject: Subject<any> = new Subject<any>();


  selectedStateChanged (emitter) {
    for (let i = 0 ; i < this.states.length ; i++) {
      if (this.states[i].value === this.selectedStateModel) {
        this.selectedState = this.states[i];
        this.selectedCityModel = this.selectedState.cities[0].value;
        break;
      }
    }
    this.eventsSubject.next({ state: this.selectedStateModel, city: this.selectedCityModel, emitter: emitter });
  }
  selectedCityChanged (emitter) {
    this.eventsSubject.next({ state: this.selectedStateModel, city: this.selectedCityModel, emitter: emitter });
  }

  private showToast(title: string, body: string) {
    const config = {
      status: this.status,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';

    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }
}

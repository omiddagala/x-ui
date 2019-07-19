import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {Observable} from 'rxjs';

@Component({
  selector: 'ngx-admin-report-radar',
  template: `
    <div echarts [options]="options" class="echart" (chartInit)="onChartInit($event)"></div>
  `,
})
export class EchartsRadarComponent implements AfterViewInit, OnDestroy, OnInit {
  options: any = {};
  themeSubscription: any;
  echartsIntance: any;
  colors;
  echarts;

  constructor(private theme: NbThemeService) {
  }
  private eventsSubscription: any;
  @Input() draw: Observable<void>;
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  onChartInit(ec) {
    this.echartsIntance = ec;
  }

  ngOnInit() {
    this.eventsSubscription = this.draw.subscribe((data) => {
      // @ts-ignore
      if (data.emitter !== 'radar')
        return;
      this.drawAgain(data);
    });
  }

  drawAgain (data) {
    this.echartsIntance.setOption(this.getOptions());
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
    this.themeSubscription.unsubscribe();
  }
  generateData () {
    return [this.randomNumber(1000, 6500), this.randomNumber(10000, 16000),
      this.randomNumber(10000, 30000), this.randomNumber(15000, 38000),
      this.randomNumber(20000, 52000), this.randomNumber(8000, 25000)];
  }

  getOptions () {
    return {
      backgroundColor: this.echarts.bg,
      color: [this.colors.danger, this.colors.warning],
      tooltip: {},
      legend: {
        data: ['هزینه', 'درامد'],
        textStyle: {
          color: this.echarts.textColor,
        },
      },
      radar: {
        name: {
          textStyle: {
            color: this.echarts.textColor,
          },
        },
        indicator: [
          { name: 'بیمه ثالث', max: 6500 },
          { name: 'بیمه عمر', max: 16000 },
          { name: 'بلیط هواپیما', max: 30000 },
          { name: 'بلیط قطار', max: 38000 },
          { name: 'بلیط اتوبوس', max: 52000 },
          { name: 'هتل', max: 25000 },
        ],
        splitArea: {
          areaStyle: {
            color: 'transparent',
          },
        },
      },
      series: [
        {
          name: 'هزینه درمقابل درامد',
          type: 'radar',
          data: [
            {
              value: this.generateData(),
              name: 'هزینه',
            },
            {
              value: this.generateData(),
              name: 'درامد',
            },
          ],
        },
      ],
    };
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      this.colors = config.variables;
      this.echarts = config.variables.echarts;

      this.options = this.getOptions();
    });
  }
}

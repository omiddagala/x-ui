import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {Observable} from 'rxjs';

@Component({
  selector: 'ngx-echarts-line',
  template: `
    <div echarts [options]="options" class="echart" (chartInit)="onChartInit($event)"></div>
  `,
})
export class EchartsLineComponent implements AfterViewInit, OnDestroy, OnInit {
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
    this.eventsSubscription = this.draw.subscribe((data) => this.drawAgain(data));
  }

  drawAgain (data) {
    this.echartsIntance.setOption(this.getOptions());
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
    this.themeSubscription.unsubscribe();
  }

  getOptions () {
    return {
      backgroundColor: this.echarts.bg,
      color: [this.colors.danger, this.colors.primary, this.colors.info],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}',
      },
      legend: {
        left: 'right',
        data: ['بیمه ثالث', 'بیمه عمر', 'بلیط هواپیما'],
        textStyle: {
          color: this.echarts.textColor,
        },
      },
      xAxis: [
        {
          type: 'category',
          data: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'],
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: this.echarts.axisLineColor,
            },
          },
          axisLabel: {
            textStyle: {
              color: this.echarts.textColor,
            },
          },
        },
      ],
      yAxis: [
        {
          type: 'log',
          axisLine: {
            lineStyle: {
              color: this.echarts.axisLineColor,
            },
          },
          splitLine: {
            lineStyle: {
              color: this.echarts.splitLineColor,
            },
          },
          axisLabel: {
            textStyle: {
              color: this.echarts.textColor,
            },
          },
        },
      ],
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
      },
      series: [
        {
          name: 'بیمه ثالث',
          type: 'line',
          data: [this.randomNumber(10, 500), this.randomNumber(10, 500), this.randomNumber(10, 500),
            this.randomNumber(10, 500), this.randomNumber(10, 500), this.randomNumber(10, 500),
            this.randomNumber(10, 500), this.randomNumber(10, 500), this.randomNumber(10, 500)],
        },
        {
          name: 'بیمه عمر',
          type: 'line',
          data: [this.randomNumber(10, 500), this.randomNumber(10, 500), this.randomNumber(10, 500),
            this.randomNumber(10, 500), this.randomNumber(10, 500), this.randomNumber(10, 500),
            this.randomNumber(10, 500), this.randomNumber(10, 500), this.randomNumber(10, 500)],
        },
        {
          name: 'بلیط هواپیما',
          type: 'line',
          data: [this.randomNumber(10, 500), this.randomNumber(10, 500), this.randomNumber(10, 500),
            this.randomNumber(10, 500), this.randomNumber(10, 500), this.randomNumber(10, 500),
            this.randomNumber(10, 500), this.randomNumber(10, 500), this.randomNumber(10, 500)],
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

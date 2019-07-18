import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {Observable} from 'rxjs';

@Component({
  selector: 'ngx-admin-reports-bar-animation',
  template: `
    <div echarts [options]="options" class="echart" (chartInit)="onChartInit($event)"></div>
  `,
})
export class EchartsBarAnimationComponent implements AfterViewInit, OnDestroy, OnInit {
  options: any = {};
  themeSubscription: any;
  echartsIntance: any;
  colors;
  echarts;
  xAxisData = [];
  data1 = [];
  data2 = [];

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
    this.generateData();
    this.echartsIntance.setOption(this.getOptions());
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
    this.themeSubscription.unsubscribe();
  }
  generateData () {
    for (let i = 0; i < 100; i++) {
      this.xAxisData.push('روز ' + i);
      this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
  }

  getOptions () {
    return {
      backgroundColor: this.echarts.bg,
      color: [this.colors.primaryLight, this.colors.infoLight],
      legend: {
        data: ['بیمه ثالث', 'بلیط هواپیما'],
        align: 'left',
        textStyle: {
          color: this.echarts.textColor,
        },
      },
      xAxis: [
        {
          data: this.xAxisData,
          silent: false,
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
          name: 'تعداد',
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
      series: [
        {
          name: 'بیمه ثالث',
          type: 'bar',
          data: this.data1,
          animationDelay: idx => idx * 10,
        },
        {
          name: 'بلیط هواپیما',
          type: 'bar',
          data: this.data2,
          animationDelay: idx => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.xAxisData = [];
      this.data1 = [];
      this.data2 = [];

      this.colors = config.variables;
      this.echarts = config.variables.echarts;

      this.options = this.getOptions();
      this.generateData();
    });
  }
}

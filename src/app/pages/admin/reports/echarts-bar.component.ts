import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {Observable} from 'rxjs';

@Component({
  selector: 'ngx-echarts-bar',
  template: `
    <div echarts [options]="options" class="echart" (chartInit)="onChartInit($event)"></div>
  `,
})
export class EchartsBarComponent implements AfterViewInit, OnDestroy, OnInit {
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
      color: [this.colors.primaryLight],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['بیمه ثالث', 'بیمه عمر', 'بلیط هواپیما', 'بلیط قطار', 'بلیط اتوبوس'],
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
          type: 'value',
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
            formatter: '{value}',
            textStyle: {
              color: this.echarts.textColor,
            },
          },
        },
      ],
      series: [
        {
          name: 'تعداد',
          type: 'bar',
          barWidth: '60%',
          data: [this.randomNumber(50, 350), this.randomNumber(50, 350), this.randomNumber(50, 350),
            this.randomNumber(50, 350), this.randomNumber(50, 350), this.randomNumber(50, 350),
            this.randomNumber(50, 350)],
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

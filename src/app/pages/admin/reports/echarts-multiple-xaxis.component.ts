import {Component, AfterViewInit, OnDestroy, OnInit, Input} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {Observable} from 'rxjs';

@Component({
  selector: 'ngx-echarts-multiple-xaxis',
  template: `
    <div echarts [options]="options" class="echart" (chartInit)="onChartInit($event)"></div>
  `,
})
export class EchartsMultipleXaxisComponent implements AfterViewInit, OnDestroy, OnInit {
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
      color: [this.colors.success, this.colors.info],
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross',
        },
      },
      legend: {
        data: ['بیمه ثالث', 'بلیط هواپیما'],
        textStyle: {
          color: this.echarts.textColor,
        },
      },
      grid: {
        top: 70,
        bottom: 50,
      },
      xAxis: [
        {
          type: 'category',
          name: 'تعداد',
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: this.colors.info,
            },
          },
          axisLabel: {
            textStyle: {
              color: this.echarts.textColor,
            },
          },
          axisPointer: {
            label: {
              formatter: params => {
                return (
                  'تعداد  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                );
              },
            },
          },
          data: [
            'فروردین-۹۷',
            'اردیبهشت-۹۷',
            'خرداد-۹۷',
            'تیر-۹۷',
            'مرداد-۹۷',
            'شهریور-۹۷',
            'مهر-۹۷',
            'آبان-۹۷',
            'آذر-۹۷',
            'دی-۹۷',
            'بهمن-۹۷',
            'اسفند-۹۷',
          ],
        },
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: this.colors.success,
            },
          },
          axisLabel: {
            textStyle: {
              color: this.echarts.textColor,
            },
          },
          axisPointer: {
            label: {
              formatter: params => {
                return (
                  'تعداد  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                );
              },
            },
          },
          data: [
            'فروردین-۹۸',
            'اردیبهشت-۹۸',
            'خرداد-۹۸',
            'تیر-۹۸',
            'مرداد-۹۸',
            'شهریور-۹۸',
            'مهر-۹۸',
            'آبان-۹۸',
            'آذر-۹۸',
            'دی-۹۸',
            'بهمن-۹۸',
            'اسفند-۹۸',
          ],
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
            textStyle: {
              color: this.echarts.textColor,
            },
          },
        },
      ],
      series: [
        {
          name: 'بیمه ثالث',
          type: 'line',
          xAxisIndex: 1,
          smooth: true,
          data: [this.randomNumber(2, 200), this.randomNumber(2, 200), this.randomNumber(2, 200),
            this.randomNumber(2, 200), this.randomNumber(2, 200), this.randomNumber(2, 200),
            this.randomNumber(2, 200), this.randomNumber(2, 200), this.randomNumber(2, 200),
            this.randomNumber(2, 200), this.randomNumber(2, 200), this.randomNumber(2, 200)],
        },
        {
          name: 'بلیط هواپیما',
          type: 'line',
          smooth: true,
          data: [this.randomNumber(2, 200), this.randomNumber(2, 200), this.randomNumber(2, 200),
            this.randomNumber(2, 200), this.randomNumber(2, 200), this.randomNumber(2, 200),
            this.randomNumber(2, 200), this.randomNumber(2, 200), this.randomNumber(2, 200),
            this.randomNumber(2, 200), this.randomNumber(2, 200), this.randomNumber(2, 200)],
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

import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {Observable} from 'rxjs';

@Component({
  selector: 'ngx-admin-report-area',
  template: `
    <div echarts [options]="options" class="echart" (chartInit)="onChartInit($event)"></div>
  `,
})
export class EchartsAreaStackComponent implements AfterViewInit, OnDestroy, OnInit {
  options: any = {};
  themeSubscription: any;
  echartsIntance: any;
  colors;
  echarts;
  oldData = [];
  themeChanged = false;

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
      if (data.emitter !== 'area')
        return;
      this.drawAgain(data);
    });
  }

  drawAgain (data) {
    this.echartsIntance.setOption(this.getOptions(false));
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
    this.themeSubscription.unsubscribe();
  }

  getOptions (justThemeChanged) {
    return {
      backgroundColor: this.echarts.bg,
      color: [this.colors.warningLight, this.colors.infoLight,
        this.colors.dangerLight, this.colors.successLight, this.colors.primaryLight],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: this.echarts.tooltipBackgroundColor,
          },
        },
      },
      legend: {
        data: ['بیمه ثالث', 'بیمه عمر', 'بلیط هواپیما', 'بلیط قطار', 'بلیط اتوبوس'],
        textStyle: {
          color: this.echarts.textColor,
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
          boundaryGap: false,
          data: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
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
          stack: 'Total amount',
          areaStyle: { normal: { opacity: this.echarts.areaOpacity } },
          data: !justThemeChanged ? this.oldData[0] = [this.randomNumber(100, 500),
            this.randomNumber(100, 500), this.randomNumber(100, 500)
            , this.randomNumber(100, 500), this.randomNumber(100, 500), this.randomNumber(100, 500),
            this.randomNumber(100, 500)] : this.oldData[0],
        },
        {
          name: 'بیمه عمر',
          type: 'line',
          stack: 'Total amount',
          areaStyle: { normal: { opacity: this.echarts.areaOpacity } },
          data: !justThemeChanged ? this.oldData[1] = [this.randomNumber(100, 500),
            this.randomNumber(100, 500), this.randomNumber(100, 500)
            , this.randomNumber(100, 500), this.randomNumber(100, 500), this.randomNumber(100, 500),
            this.randomNumber(100, 500)] : this.oldData[1],
        },
        {
          name: 'بلیط هواپیما',
          type: 'line',
          stack: 'Total amount',
          areaStyle: { normal: { opacity: this.echarts.areaOpacity } },
          data: !justThemeChanged ? this.oldData[2] = [this.randomNumber(100, 500),
            this.randomNumber(100, 500), this.randomNumber(100, 500)
            , this.randomNumber(100, 500), this.randomNumber(100, 500), this.randomNumber(100, 500),
            this.randomNumber(100, 500)] : this.oldData[2],
        },
        {
          name: 'بلیط قطار',
          type: 'line',
          stack: 'Total amount',
          areaStyle: { normal: { opacity: this.echarts.areaOpacity } },
          data: !justThemeChanged ? this.oldData[3] = [this.randomNumber(100, 500),
            this.randomNumber(100, 500), this.randomNumber(100, 500)
            , this.randomNumber(100, 500), this.randomNumber(100, 500), this.randomNumber(100, 500),
            this.randomNumber(100, 500)] : this.oldData[3],
        },
        {
          name: 'بلیط اتوبوس',
          type: 'line',
          stack: 'Total amount',
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                color: this.echarts.textColor,
              },
            },
          },
          areaStyle: { normal: { opacity: this.echarts.areaOpacity } },
          data: !justThemeChanged ? this.oldData[4] = [this.randomNumber(100, 500),
            this.randomNumber(100, 500), this.randomNumber(100, 500)
            , this.randomNumber(100, 500), this.randomNumber(100, 500), this.randomNumber(100, 500),
            this.randomNumber(100, 500)] : this.oldData[4],
        },
      ],
    };
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      this.colors = config.variables;
      this.echarts = config.variables.echarts;

      this.options = this.getOptions(this.themeChanged);
      this.themeChanged = true;
    });
  }
}

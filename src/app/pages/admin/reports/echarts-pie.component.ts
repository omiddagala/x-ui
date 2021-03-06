import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {Observable} from 'rxjs';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart" (chartInit)="onChartInit($event)"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy, OnInit {
  options: any = {};
  themeSubscription: any;
  echartsIntance: any;
  colors;
  echarts;
  oldData;
  themeChanged = false;

  constructor(private theme: NbThemeService) {
  }
  private eventsSubscription: any;
  @Input() draw: Observable<void>;
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  generateData() {
    return [
      { value: this.randomNumber(100, 999), name: 'بیمه عمر' },
      { value: this.randomNumber(100, 999), name: 'بلیط هواپیما' },
      { value: this.randomNumber(100, 999), name: 'بلیط قطار' },
      { value: this.randomNumber(100, 999), name: 'بلیط اتوبوس' },
      { value: this.randomNumber(100, 999), name: 'بیمه ثالث' },
    ];
  }
  getOptions (justThemeChanged) {
    return {
      backgroundColor: echarts.bg,
      color: [this.colors.warningLight, this.colors.infoLight,
        this.colors.dangerLight, this.colors.successLight, this.colors.primaryLight],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'horizontal',
        left: 'right',
        data: ['بیمه ثالث', 'بیمه عمر', 'بلیط هواپیما', 'بلیط قطار', 'بلیط اتوبوس'],
        textStyle: {
          color: this.echarts.textColor,
        },
      },
      series: [
        {
          name: 'محصول',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: !justThemeChanged ? this.oldData = this.generateData() : this.oldData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: this.echarts.itemHoverShadowColor,
            },
          },
          label: {
            normal: {
              textStyle: {
                color: this.echarts.textColor,
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: this.echarts.axisLineColor,
              },
            },
          },
        },
      ],
    };
  }

  onChartInit(ec) {
    this.echartsIntance = ec;
  }

  ngOnInit() {
    this.eventsSubscription = this.draw.subscribe((data) => {
      // @ts-ignore
      if (data.emitter !== 'pie')
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

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      this.colors = config.variables;
      this.echarts = config.variables.echarts;

      this.options = this.getOptions(this.themeChanged);
      this.themeChanged = true;
    });
  }
}

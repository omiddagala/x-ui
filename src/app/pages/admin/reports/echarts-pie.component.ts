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

  constructor(private theme: NbThemeService) {
  }
  private eventsSubscription: any;
  @Input() draw: Observable<void>;
  private chartData = this.generateData();
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
  getOptions () {
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
          color: '#1a2138',
        },
      },
      series: [
        {
          name: 'محصول',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: this.generateData(),
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: echarts.itemHoverShadowColor,
            },
          },
          label: {
            normal: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: echarts.axisLineColor,
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
    this.eventsSubscription = this.draw.subscribe((data) => this.drawAgain(data));
  }

  drawAgain (data) {
    this.echartsIntance.setOption(this.getOptions());
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
    this.themeSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      this.colors = config.variables;
      this.echarts = config.variables.echarts;

      this.options = this.getOptions();
    });
  }
}

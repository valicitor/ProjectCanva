import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  InputSignal,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import * as echarts from 'echarts';
import { ThemeService } from 'src/app/services/theme.service';

export type RendererType = 'canvas' | 'svg';

@Component({
  selector: 'shared-e-chart',
  template: `<div #myChartElem style="width: 400px;height:300px;"></div>`,
  standalone: true,
})
export class SharedEChartComponent implements OnInit {
  @ViewChild('myChartElem', { static: true }) public myChartElem!: ElementRef;

  options: InputSignal<any> = input.required<any>();
  theme: InputSignal<string | null> = input<string | null>(null);
  renderer: InputSignal<RendererType> = input<RendererType>('canvas');
  useDirtyRect: InputSignal<boolean> = input<boolean>(false);

  myChart: echarts.ECharts | undefined;

  platformId = inject(PLATFORM_ID);

  themeEffect = effect(() => {
    if (this.themeService.themeState()) {
      this.initChart();
    }
  });

  dataEffect = effect(() => {
    if (this.options()) {
      this.initChart();
    }
  });

  constructor(
    private themeService: ThemeService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      this.myChart = echarts.init(
        this.myChartElem.nativeElement,
        this.theme(),
        {
          renderer: this.renderer(),
          useDirtyRect: this.useDirtyRect(),
        }
      );
      this.myChart.setOption(this.options());
      this.cd.markForCheck();
    }
  }
}

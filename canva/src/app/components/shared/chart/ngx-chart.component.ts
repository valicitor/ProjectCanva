import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  input,
  InputSignal,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { NgxEchartsModule, NGX_ECHARTS_CONFIG, ThemeOption } from 'ngx-echarts';
import { EChartsCoreOption } from 'echarts/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  standalone: true,
  selector: 'shared-ngx-chart',
  template: `<div
    echarts
    [options]="options()"
    [theme]="theme()"
    [initOpts]="initOpts()"
  ></div>`,
  imports: [NgxEchartsModule],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: () => import('echarts') }),
    },
  ],
})
export class SharedNgxEChartComponent implements OnInit {
  options: InputSignal<EChartsCoreOption> = input.required<EChartsCoreOption>(
    {}
  );
  theme: InputSignal<string | ThemeOption | null> = input<
    string | ThemeOption | null
  >(null);
  initOpts: InputSignal<any> = input<any>(null);

  platformId = inject(PLATFORM_ID);

  themeEffect = effect(() => {
    if (this.themeService.themeState()) {
      this.initChart();
    }
  });

  dataEffect = effect(() => {
    if (this.options() || this.theme() || this.initOpts()) {
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
      this.cd.markForCheck();
    }
  }
}

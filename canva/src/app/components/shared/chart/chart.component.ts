import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  inject,
  input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ImportsModule } from '../../../imports';

@Component({
  selector: 'shared-chart',
  template: `<p-chart
    [type]="type()"
    [data]="data()"
    [options]="options()"
    ariaLabel="Data"
  />`,
  standalone: true,
  imports: [ImportsModule],
})
export class SharedChartComponent implements OnInit {
  type: any = input.required<any>();
  data: any = input<any>();
  options: any = input<any>();

  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.cd.markForCheck();
    }
  }
}

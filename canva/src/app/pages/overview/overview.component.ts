import { ChangeDetectorRef, Component, computed, effect, OnInit } from '@angular/core';
import { SharedChartComponent } from '../../components/shared/chart/chart.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { ThemeService } from 'src/app/services/theme.service';
import { ThemeSelector } from '../../components/shared/theme/theme-selector.component';
import { ImportsModule } from '../../imports';
import { DarkmodeToggler } from '../../components/shared/theme/darkmode-toggler.directive';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview.component.html',
  standalone: true,
  imports: [
    SharedChartComponent,
    MultiSelectModule,
    DarkmodeToggler,
    ThemeSelector,
    ImportsModule
],
})
export class OverviewPageComponent {
  selectedPeriodOption: any = 1;
  chartPeriodOptions: any[] = [
    { name: 'Weekly', value: 1 },
    { name: 'Monthly', value: 2 },
    { name: 'Yearly', value: 3 },
  ];
  date: Date | undefined;
  simpleChartData = {};
  simpleChartOptions = {};
  items = [
    {
      label: 'Update',
      icon: 'pi pi-refresh',
    },
    {
      label: 'Delete',
      icon: 'pi pi-times',
    },
  ];
  searchValue: any = '';

  theme = computed(() => this.themeService.themeState());

  constructor(
    private themeService: ThemeService,
    private cd: ChangeDetectorRef
  ) {
    effect(() => {
      const state = this.theme();
      this.updateChart();
    });
  }

  updateChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const primaryColor500 = documentStyle.getPropertyValue('--p-primary-500');
    const primaryColor400 = documentStyle.getPropertyValue('--p-primary-400');
    const primaryColor300 = documentStyle.getPropertyValue('--p-primary-300');
    let textColorSecondary = (context:any) => {
      let documentStyle = getComputedStyle(document.documentElement);
      return documentStyle.getPropertyValue('--p-text-muted-color');
    }
    let surfaceBorder = (context:any) => {
      let documentStyle = getComputedStyle(document.documentElement);
      return documentStyle.getPropertyValue('--p-content-border-color');
    }

    this.simpleChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor: primaryColor500,
          borderRadius: 15,
          data: [50, 25, 12, 48, 90, 76, 42],
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: primaryColor400,
          borderRadius: 15,
          data: [21, 84, 24, 75, 37, 65, 34],
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: primaryColor300,
          borderRadius: 15,
          data: [41, 52, 24, 74, 23, 21, 32],
        },
      ],
    };

    this.simpleChartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      responsive: true,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false,
        },
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary,
          },
          border: {
            display: true
          },
          grid: {
            display: true,
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: textColorSecondary,
          },
          border: {
            display: true
          },
          grid: {
            display: true,
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
    this.cd.markForCheck();
  }
}

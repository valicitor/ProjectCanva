import { Component, OnInit } from '@angular/core';
import { SharedNgxEChartComponent } from '../../components/shared/chart/ngx-chart.component';
import { SharedEChartComponent } from '../../components/shared/chart/e-chart.component';
import { SharedChartComponent } from '../../components/shared/chart/chart.component';
import { ImportsModule } from '../../imports';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.component.html',
  standalone: true,
  imports: [
    SharedNgxEChartComponent,
    SharedEChartComponent,
    SharedChartComponent,
    ImportsModule,
],
})
export class LandingPageComponent implements OnInit {
  simpleChartData: any;
  ngxChartOptions: any;
  apacheEChartOptions: any;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.simpleChartData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Sales',
          data: [540, 325, 702, 620],
          backgroundColor: [
            'rgba(249, 115, 22, 0.2)',
            'rgba(6, 182, 212, 0.2)',
            'rgba(107, 114, 128, 0.2)',
            'rgba(139, 92, 246, 0.2)',
          ],
          borderColor: [
            'rgb(249, 115, 22)',
            'rgb(6, 182, 212)',
            'rgb(107, 114, 128)',
            'rgb(139, 92, 246)',
          ],
          borderWidth: 1,
        },
      ],
    };

    this.ngxChartOptions = {
      xAxis: {
        type: 'category',
        data: ['Q1', 'Q2', 'Q3', 'Q4'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [540, 325, 702, 620],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
      ],
    };

    this.apacheEChartOptions = {
      tooltip: {},
      legend: {
        data: ['category'],
      },
      xAxis: {
        data: ['Q1', 'Q2', 'Q3', 'Q4'],
      },
      yAxis: {},
      series: [
        {
          name: 'category',
          type: 'bar',
          data: [540, 325, 702, 620],
        },
      ],
    };
  }
}

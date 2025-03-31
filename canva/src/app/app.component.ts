import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { RouterModule } from '@angular/router';

@Component({
  imports: [ RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'canva';

  constructor(private themeService: ThemeService) {}
}

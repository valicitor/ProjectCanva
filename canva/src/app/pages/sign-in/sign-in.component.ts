import { Component, computed, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImportsModule } from '../../imports';
import { SvgLogo } from "../../components/shared/logo/logo.component";
import { ThemeService } from 'src/app/services/theme.service';
import { ThemeSelector } from "../../components/shared/theme/theme-selector.component";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in.component.html',
  standalone: true,
  imports: [RouterLink, ImportsModule, SvgLogo, ThemeSelector],
})
export class SignInPageComponent implements OnInit {
  username!: string;
  password!: string;

  theme = computed(() => this.themeService.themeState());
  
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    
  }
}

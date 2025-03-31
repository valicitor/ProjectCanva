import { Component, computed, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImportsModule } from '../../imports';
import { SvgLogo } from "../../components/shared/logo/logo.component";
import { ThemeService } from 'src/app/services/theme.service';
import { ThemeSelector } from "../../components/shared/theme/theme-selector.component";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up.component.html',
  standalone: true,
  imports: [RouterLink, ImportsModule, SvgLogo, ThemeSelector],
})
export class SignUpPageComponent implements OnInit {
  username!: string;
  email!: string;
  password!: string;
  confirm!: string;

  theme = computed(() => this.themeService.themeState());
  
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    
  }
}

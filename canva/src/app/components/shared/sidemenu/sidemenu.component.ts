import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImportsModule } from '../../../imports';
import { SvgLogo } from '../logo/logo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  template: `<div
    class="p-5 bg-surface-50 dark:bg-surface-900 h-full flex flex-col justify-between w-auto"
  >
    <div class="w-12 flex flex-col items-center">
      <div class="flex items-center gap-3">
        <div
          class="w-11 h-11 border border-primary rounded-xl flex items-center justify-center"
        >
          <app-svg-logo></app-svg-logo>
        </div>
      </div>
      <div class="mt-10 flex flex-col gap-2">
        @for (item of items; track item.name) {
          <p-button
            [icon]="item.icon"
            [text]="!item.active"
            [severity]="item.active ? 'primary' : 'secondary'"
            [pTooltip]="item.name"
            [routerLink]="item.link"
            tooltipPosition="right"
          />
        }
      </div>
    </div>
    <div class="w-12 flex flex-col items-center">
      <div class="mt-10 flex flex-col gap-2">
        <p-button
          icon="pi pi-cog"
          [text]="true"
          severity="secondary"
          aria-label="Settings"
          pTooltip="Settings"
          tooltipPosition="right"
        />
      </div>
      <p-divider />
      <div class="flex items-center justify-center">
        <p-avatar
          image="https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png"
          size="large"
          shape="circle"
        />
      </div>
    </div>
  </div>`,
  standalone: true,
  imports: [CommonModule, RouterLink, ImportsModule, SvgLogo],
})
export class SidemenuLogo {
  items: any = [
    {
      name: 'Overview',
      icon: 'pi pi-home',
      link: 'overview',
      active: true,
    },
    {
      name: 'Chat',
      icon: 'pi pi-comment',
      link: 'landing',
      active: false,
    },
    {
      name: 'Inbox',
      icon: 'pi pi-inbox',
      link: 'nx-welcome',
      active: false,
    },
    {
      name: 'Cards',
      icon: 'pi pi-th-large',
      link: '',
      active: false,
    },
    {
      name: 'Customers',
      icon: 'pi pi-user',
      link: '',
      active: false,
    },
    {
      name: 'Movies',
      icon: 'pi pi-video',
      link: 'sign-in',
      active: false,
    },
  ];

  constructor() {}
}

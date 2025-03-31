import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidemenuLogo } from '../sidemenu/sidemenu.component';

@Component({
  selector: 'shared-layout',
  template: `<div
    class="bg-surface-0 border border-black/10 dark:border-white/20 dark:bg-surface-950 w-full h-[100vh] flex items-start overflow-hidden"
  >
    <app-sidemenu class="flex-none h-full w-22"></app-sidemenu>
    <div class="flex-1 h-full w-64">
      <router-outlet class="hidden"></router-outlet>
    </div>
  </div>`,
  standalone: true,
  imports: [CommonModule, RouterModule, SidemenuLogo],
})
export class SharedLayoutComponent {}

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, computed, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { ImportsModule } from '../../../imports'

@Component({
  selector: '[pThemeSelector]',
  template: ` <p-button
      icon="pi pi-palette"
      severity="secondary"
      variant="outlined"
      (click)="theme.toggle($event)"
    ></p-button>
    <p-popover #theme>
      <div class="w-[18rem]">
        <div class="flex-col justify-start items-start gap-2 inline-flex pr-4">
          <span class="text-sm font-medium">Primary Colors</span>
          <div
            class="self-stretch justify-start items-start gap-2 inline-flex flex-wrap"
          >
            @for (primaryColor of primaryColors(); track primaryColor.name) {
            <button
              type="button"
              [title]="primaryColor.name"
              (click)="updateColors($event, 'primary', primaryColor)"
              class="outline outline-2 outline-offset-1 outline-transparent cursor-pointer p-0 rounded-[50%] w-5 h-5"
              [ngStyle]="{
                'background-color':
                  primaryColor.name === 'noir'
                    ? 'var(--p-text-color)'
                    : primaryColor.palette['500'],
                'outline-color':
                  selectedPrimaryColor() === primaryColor.name
                    ? 'var(--p-primary-color)'
                    : ''
              }"
            ></button>
            }
          </div>
        </div>
        <div class="flex-col justify-start items-start gap-2 inline-flex pr-2">
          <span class="text-sm font-medium">Surface Colors</span>
          <div class="self-stretch justify-start items-start gap-2 inline-flex">
            @for (surface of surfaces(); track surface.name) {
            <button
              type="button"
              [title]="surface.name"
              (click)="updateColors($event, 'surface', surface)"
              class="outline outline-2 outline-offset-1 outline-transparent cursor-pointer p-0 rounded-[50%] w-5 h-5"
              [ngStyle]="{
                'background-color': surface.palette['500'],
                'outline-color':
                  selectedSurfaceColor() === surface.name
                    ? 'var(--p-primary-color)'
                    : ''
              }"
            ></button>
            }
          </div>
        </div>
        <div
          class="flex-col justify-start items-start gap-2 inline-flex w-full"
        >
          <span class="text-sm font-medium">Preset</span>
          <div
            class="inline-flex p-[0.28rem] items-start gap-[0.28rem] rounded-[0.71rem] border border-[#00000003] w-full"
          >
            <p-selectbutton
              [options]="presets()"
              [ngModel]="selectedPreset()"
              (ngModelChange)="onPresetChange($event)"
              [allowEmpty]="false"
              [unselectable]="true"
              size="small"
            />
          </div>
        </div>
        <div
          class="inline-flex flex-col justify-start items-start gap-2 w-full pt-4 pb-2"
        >
          <span class="text-sm font-medium m-0">Ripple Effect</span>
          <p-toggleswitch [(ngModel)]="ripple" />
        </div>
      </div>
    </p-popover>`,
  standalone: true,
  imports: [
    CommonModule,
    ImportsModule
  ],
})
export class ThemeSelector implements OnInit {
  presets = computed(() => this.themeService.presets());
  surfaces = computed(() => this.themeService.surfaces());
  selectedPrimaryColor = computed(() => this.themeService.selectedPrimaryColor());
  selectedSurfaceColor = computed(() => this.themeService.selectedSurfaceColor());
  selectedPreset = computed(() => this.themeService.selectedPreset());
  primaryColors = computed(() => this.themeService.primaryColors());

  get ripple() {
    return this.themeService.ripple;
  }

  set ripple(value: boolean) {
    this.themeService.ripple = value;
  }

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    if (isPlatformBrowser(this.themeService.platformId)) {
      this.onPresetChange(this.themeService.themeState().preset);
    }
  }

  onPresetChange(event: any) {
    this.themeService.onPresetChange(event);
  }

  updateColors(event: any, type: string, color: any) {
    return this.themeService.updateColors(event, type, color);
  }
}

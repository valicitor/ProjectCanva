import {
  Directive,
  HostListener,
  ElementRef,
  computed,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Directive({
  selector: '[pDarkmodeToggler]',
})
export class DarkmodeToggler implements AfterViewInit {
  iconClass = computed(() => this.themeService.iconClass());

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngAfterViewInit() {
    this.updateIconClass();
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.themeService.onThemeToggler();

    this.updateIconClass();
  }

  updateIconClass() {
    const nativeElement = this.el.nativeElement;

    // Set the icon dynamically using the computed value
    this.renderer.setAttribute(nativeElement, 'icon', `pi ${this.iconClass()}`);
    // Update the class of the child <button> element
    const childButton = nativeElement.querySelector('span');
    if (childButton) {
      this.renderer.setAttribute(
        childButton,
        'class',
        `pi ${this.iconClass()}`
      );
    }
  }
}

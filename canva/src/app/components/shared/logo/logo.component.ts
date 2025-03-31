import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-logo',
  template: `<svg
    [attr.width]="width"
    [attr.height]="height"
    viewBox="0 0 20 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.65 11.0645L13.1283 10.7253L14.3119 12.4216V17.6803L18.3698 14.2876V8.52002L16.5099 9.19856L14.65 11.0645Z"
      fill="var(--p-primary-color)"
    ></path>
    <path
      d="M5.18078 11.0645L6.70251 10.7253L5.51894 12.4216V17.6803L1.46098 14.2876V8.52002L3.32088 9.19856L5.18078 11.0645Z"
      fill="var(--p-primary-color)"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.02649 12.7634L7.37914 10.7278L8.22455 11.2367H11.6062L12.4516 10.7278L13.8042 12.7634V20.397L12.7898 21.9237L11.6062 23.1111H8.22455L7.04098 21.9237L6.02649 20.397V12.7634Z"
      fill="var(--p-primary-color)"
    ></path>
    <path
      d="M14.311 20.9058L16.5091 18.7005V16.4952L14.311 18.3612V20.9058Z"
      fill="var(--p-primary-color)"
    ></path>
    <path
      d="M5.51868 20.9058L3.32062 18.7005V16.4952L5.51868 18.3612V20.9058Z"
      fill="var(--p-primary-color)"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.578 0.888672H7.7177L6.36505 4.11174L8.56311 10.5579H11.4375L13.4665 4.11174L12.1138 0.888672H10.2543V10.5578H9.578V0.888672Z"
      fill="var(--p-primary-color)"
    ></path>
    <path
      d="M8.56283 10.5575L1.29232 7.84329L0.277832 3.60242L6.53385 4.11132L8.73191 10.5575H8.56283Z"
      fill="var(--p-primary-color)"
    ></path>
    <path
      d="M11.4372 10.5575L18.7077 7.84329L19.7222 3.60242L13.2971 4.11132L11.2681 10.5575H11.4372Z"
      fill="var(--p-primary-color)"
    ></path>
    <path
      d="M13.8041 3.60283L17.3548 3.26356L14.9876 0.888672H12.6205L13.8041 3.60283Z"
      fill="var(--p-primary-color)"
    ></path>
    <path
      d="M6.02676 3.60283L2.47604 3.26356L4.84318 0.888672H7.21033L6.02676 3.60283Z"
      fill="var(--p-primary-color)"
    ></path>
  </svg>`,
  standalone: true,
  imports: [CommonModule],
})
export class SvgLogo {
  @Input() width: number = 20;
  @Input() height: number = 24;

  constructor() {}
}

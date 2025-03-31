import { Route } from '@angular/router';
import { SignInPageComponent } from './pages/sign-in/sign-in.component';
import { OverviewPageComponent } from './pages/overview/overview.component';
import { NxWelcomeComponent } from './pages/welcome/nx-welcome.component';
import { LandingPageComponent } from './pages/landing/landing.component';
import { SignUpPageComponent } from './pages/sign-up/sign-up.component';
import { SharedLayoutComponent } from './components/shared/layout/layout.component';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
    {
        path: 'sign-in',
        component: SignInPageComponent
    },
    {
        path: 'sign-up',
        component: SignUpPageComponent
    },
    {
        path: '',
        component: SharedLayoutComponent,
        children: [
            {
                path: 'overview',
                component: OverviewPageComponent
            },
            {
                path: 'nx-welcome',
                component: NxWelcomeComponent
            },
            {
                path: 'landing',
                component: LandingPageComponent
            }
        ]
    }
];
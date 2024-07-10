import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:982898857.
        path: 'login',
        component:LoginComponent
    },
    {
        path: '',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent,
                canActivate: [authGuard]
            }
        ]
    }
];

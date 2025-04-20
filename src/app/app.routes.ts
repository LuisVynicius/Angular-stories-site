import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TalesPageComponent } from './pages/tales-page/tales-page.component';
import { TalePageComponent } from './pages/tale-page/tale-page.component';

export const routes: Routes = [
    {
        path: "login",
        pathMatch: "full",
        component: LoginPageComponent
    },
    {
        path: "tales",
        component: TalesPageComponent
    },
    {
        path: "tale",
        component: TalePageComponent
    }
];

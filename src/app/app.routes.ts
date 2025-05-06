import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TalesPageComponent } from './pages/tales-page/tales-page.component';
import { TalePageComponent } from './pages/tale-page/tale-page.component';
import { authGuard } from './guards/auth.guard';
import { ReadPageComponent } from './pages/read-page/read-page.component';
import { TitlesComponent } from './pages/shared/titles/titles.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { CreateTaleComponent } from './pages/create-tale/create-tale.component';
import { MenuComponent } from './pages/shared/menu/menu.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {
        path: "login",
        pathMatch: "full",
        component: LoginPageComponent
    },
    {
        path: "tales",
        pathMatch: "full",
        component: TalesPageComponent,
        canActivate: [
            authGuard
        ]
    },
    {
        path: "tales/:name",
        component: TalePageComponent,
        canActivate: [
            authGuard
        ]
    },
    {
        path: "tales/:name/:number",
        component: ReadPageComponent,
        canActivate: [
            authGuard
        ]
    },
    {
        path: "myProfile",
        pathMatch: "full",
        component: MyProfileComponent,
        canActivate: [
            authGuard
        ]
    },
    {
        path: "profile/:username",
        component: ProfileComponent
    },
    {
        path: "create",
        component: CreateTaleComponent,
        canActivate: [
            authGuard
        ]   
    },
    {
        path: "**",
        redirectTo: "login"
    }
];

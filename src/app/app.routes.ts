import { Routes } from '@angular/router';
import { ReadingComponent } from './page/reading/reading.component';
import { LoginComponent } from './page/login/login.component';

export const routes: Routes = [
    {
        path: 'reading',
        component: ReadingComponent,
        pathMatch: 'prefix'
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    }
];

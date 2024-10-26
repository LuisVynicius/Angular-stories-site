import { Routes } from '@angular/router';
import { ReadingComponent } from './page/reading/reading.component';

export const routes: Routes = [
    {
        path: 'reading',
        component: ReadingComponent,
        pathMatch: 'prefix'
    }
];

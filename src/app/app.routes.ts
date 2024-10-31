import { Routes } from '@angular/router';
import { ReadingComponent } from './page/reading/reading.component';
import { LoginComponent } from './page/login/login.component';
import { StoriesComponent } from './page/stories/stories.component';
import { BookComponent } from './page/book/book.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'stories',
        component: StoriesComponent,
        pathMatch: 'full'
    },
    {
        path: 'book/:title',
        component: BookComponent,
        pathMatch: 'full'
    },
    {
        path: 'book/:title/:number',
        component: ReadingComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'stories'
    }
];

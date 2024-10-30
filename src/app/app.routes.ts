import { Routes } from '@angular/router';
import { ReadingComponent } from './page/reading/reading.component';
import { LoginComponent } from './page/login/login.component';
import { StoriesComponent } from './page/stories/stories.component';
import { BookComponent } from './page/book/book.component';

export const routes: Routes = [
    {
        path: 'reading/:title',
        // Mudar isso aqui
        component: ReadingComponent,
        pathMatch: 'prefix',
        children: [
            {
                path: ':chapter',
                component: ReadingComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'stories',
        component: StoriesComponent,
        pathMatch: 'prefix'
    },
    {
        path: 'book',
        pathMatch: 'prefix',
        children: [
            {
                path: ':name',
                component: BookComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'stories'
    }
];

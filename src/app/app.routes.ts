import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BooksComponent } from './pages/books/books.component';
import { BookViewComponent } from './pages/book-view/book-view.component';
import { ReadingComponent } from './pages/reading/reading.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyAreaComponent } from './pages/my-area/my-area.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'books',
        component: BooksComponent,
        pathMatch: 'full'
    },
    {
        path: 'book/:name',
        component: BookViewComponent,
        pathMatch: 'full'
    },
    {
        path: 'book/:name/:chapter',
        component: ReadingComponent,
        pathMatch: 'full'
    },
    {
        path: 'profile/:name',
        component: ProfileComponent,
        pathMatch: 'full'
    },
    {
        path: 'my-area',
        component: MyAreaComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'books'
    }
];

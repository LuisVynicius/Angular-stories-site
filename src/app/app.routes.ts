import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BooksComponent } from './pages/books/books.component';
import { BookViewComponent } from './pages/book-view/book-view.component';
import { ReadingComponent } from './pages/reading/reading.component';

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
        path: '**',
        redirectTo: 'books'
    }
];

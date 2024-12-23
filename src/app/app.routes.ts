import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BooksComponent } from './pages/books/books.component';

export const routes: Routes = [
    {
        path: '**',
        component: BooksComponent
    }
];

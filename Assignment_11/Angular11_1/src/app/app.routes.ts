import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';

export const routes: Routes =
[
    {
        path : 'books',
        component : BooksComponent
    },

    {
        path : 'technologies',
        component : TechnologiesComponent
    }
];

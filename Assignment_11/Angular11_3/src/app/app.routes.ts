import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { WrongChoiceComponent } from './wrong-choice/wrong-choice.component';

export const routes: Routes =
[
    {
        path : '',
        component : TechnologiesComponent
    }, 
    {
        path : 'technologies',
        component : TechnologiesComponent
    },
    {
        path : 'books',
        component : BooksComponent
    },
    {
        path : "**",
        component : WrongChoiceComponent
    }
];

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RootComponent } from './components/root.component';
import { LearnComponent } from './components/learn.component';
import { PracticeComponent } from './components/practice.component';
import { HighscoreComponent } from './components/highscore.component';
import { LearnAdditionComponent } from './components/learn/addition.component';
import { LearnSubtractionComponent } from './components/learn/subtraction.component';
import { LearnMultiplicationComponent } from './components/learn/multiplication.component';
import { LearnDivisionComponent } from './components/learn/division.component';

const appRoutes: Routes = [
    {
        path: '',
        component: RootComponent
    },
    {
        path: 'learn',
        component: LearnComponent
    },
    {
        path: 'learn/addition',
        component: LearnAdditionComponent
    },
    {
        path: 'learn/subtraction',
        component: LearnSubtractionComponent
    },
    {
        path: 'learn/multiplication',
        component: LearnMultiplicationComponent
    },
    {
        path: 'learn/division',
        component: LearnDivisionComponent
    },
    {
        path: 'practice',
        component: PracticeComponent
    },
    {
        path: 'highscore',
        component: HighscoreComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
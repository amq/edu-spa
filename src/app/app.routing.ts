import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RootComponent } from './components/root.component';
import { LearnComponent } from './components/learn.component';
import { PracticeComponent } from './components/practice.component';

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
        path: 'practice',
        component: PracticeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
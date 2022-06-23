import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';

const routes: Routes = [
    {
        path: 'characters',
        component: CharactersComponent
    }
];

export const adminRouter: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);

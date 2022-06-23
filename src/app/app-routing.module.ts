import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Setup the admin module for the routing.
const adminModule = () => import('./modules/admin/admin.module').then((module) => module.AdminModule);

const routes: Routes = [
  {
    path: 'admin',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'admin',
        loadChildren: adminModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

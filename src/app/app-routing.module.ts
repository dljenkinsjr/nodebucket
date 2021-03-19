/*============================================;
Title: nodebucket;
Author: Professor Krasso ;
Date: 18 March 2021;
Modified By: Douglas Jenkins;
Description: creating a sign in page
;===========================================*/

import { HomeComponent } from './pages/home/home.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// added the import statements
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/auth.guard';

//creates the route to display the login page
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

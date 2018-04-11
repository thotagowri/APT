import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {LoginComponent} from "./login/component";
import {RegisterComponent} from "./registration/component";

const routes:Routes = [
  {
    path:'login',
    component: LoginComponent
  },{
    path:'register',
    component: RegisterComponent
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];

export const AppRouting: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


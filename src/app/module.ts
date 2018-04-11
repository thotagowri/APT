import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './component';
import {ProductionMaterialModule} from "./material.module";
import {AppRouting, routing} from "./routing";
import {LoginComponent} from "./login/component";
import {RegisterComponent} from "./registration/component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ProductionMaterialModule,
    routing,
  ],
  providers: [AppRouting],
  bootstrap: [AppComponent]
})
export class AppModule { }

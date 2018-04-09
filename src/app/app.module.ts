import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ProductionMaterialModule} from "./material.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductionMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

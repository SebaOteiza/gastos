import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesesComponent } from './meses/meses.component';
import { GastosComponent } from './gastos/gastos.component';

@NgModule({
  declarations: [
    AppComponent,
    MesesComponent,
    GastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

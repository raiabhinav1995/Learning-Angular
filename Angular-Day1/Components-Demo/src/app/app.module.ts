import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AppServer } from './app-server/app-server.component'
import {AppServersComponent} from './app-servers/app-servers.component'

@NgModule({
  declarations: [
    AppComponent,
    AppServer,
    AppServersComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

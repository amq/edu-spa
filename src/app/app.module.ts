import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RootComponent } from './components/root.component';
import { LearnComponent } from './components/learn.component';
import { PracticeComponent } from './components/practice.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    LearnComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

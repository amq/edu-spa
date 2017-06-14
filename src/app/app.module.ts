import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RootComponent } from './components/root.component';
import { LearnComponent } from './components/learn.component';
import { LearnAdditionComponent } from './components/learn/addition.component';
import { LearnSubtractionComponent } from './components/learn/subtraction.component';
import { LearnMultiplicationComponent } from './components/learn/multiplication.component';
import { LearnDivisionComponent } from './components/learn/division.component';
import { PracticeComponent } from './components/practice.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    LearnComponent,
    PracticeComponent,
    LearnAdditionComponent,
    LearnSubtractionComponent,
    LearnMultiplicationComponent,
    LearnDivisionComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule, 
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

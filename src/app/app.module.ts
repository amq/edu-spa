import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

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
    routing,
    AngularFireModule.initializeApp(environment.firebase, 'edu-spa'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../environments/firebase.config';

import { AppComponent } from './app.component';
import { RootComponent } from './components/root.component';
import { LearnComponent } from './components/learn.component';
import { LearnAdditionComponent } from './components/learn/addition.component';
import { LearnSubtractionComponent } from './components/learn/subtraction.component';
import { LearnMultiplicationComponent } from './components/learn/multiplication.component';
import { LearnDivisionComponent } from './components/learn/division.component';
import { PracticeComponent } from './components/practice.component';
import { HighscoreComponent } from './components/highscore.component';

import { routing } from './app.routing';

import { ReversePipe } from './components/reverse.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    LearnComponent,
    PracticeComponent,
    LearnAdditionComponent,
    LearnSubtractionComponent,
    LearnMultiplicationComponent,
    LearnDivisionComponent,
    HighscoreComponent,
    ReversePipe
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

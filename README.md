# EduSpa [![Build Status](https://travis-ci.org/amq/edu-spa.svg?branch=master)](https://travis-ci.org/amq/edu-spa)

## Functionality
Web App providing ways to learn a subject and practice, both with and without scoring.

## Code structure
Angular components:
* app.component
  * root.component
    * learn.component
      * addition.component
      * division.component
      * multiplication.component
      * subtraction.component
    * practice.component
      * highscore.component
      * reverse.component 

JS/CSS Includes:
* Font-Awesome
* BootstrapCSS

Angular Imports:
* NgbModule
* BrowserModule
* FormsModule
* HttpModule
* ReactiveFormsModule
* routing
* AngularFireModule
* AngularFireDatabaseModule
* AngularFireAuthModule

## Technologies used
[Angular2](https://angular.io/): Responsive design

[BootstrapCSS](http://getbootstrap.com/) / [Ng-Bootstrap](https://ng-bootstrap.github.io/): Styling basics (buttons, forms)

[Font-Awesome](http://fontawesome.io/): Icons and Fonts

[Firebase](https://firebase.google.com/): Web-App platform by Google, also provides Database backend

## Nuts and bolts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to Firebase

Run `ng build --prod` to build a production version.

Then run `firebase login` to log in and `firebase deploy` to deploy.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

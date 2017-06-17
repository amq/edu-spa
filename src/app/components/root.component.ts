import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'root',
  templateUrl: './root.component.html'
})
export class RootComponent {

  constructor(db: AngularFireDatabase) {
    /*
    https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md
    https://github.com/angular/angularfire2/blob/master/docs/2-retrieving-data-as-objects.md
    */
  }
}
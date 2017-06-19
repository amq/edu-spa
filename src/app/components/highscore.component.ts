import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'highscore',
    templateUrl: './highscore.component.html'
})
export class HighscoreComponent {
  items: FirebaseListObservable<any>;
  order: string = "score";
  ascending: boolean = false;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/scores', {
      query: {
      orderByChild: 'score',
      limitToLast: 15
      }
    });
  }
  
  addItem(newName: string, score: number) {
    this.items.push({ text: newName, score: score });
  }

  deleteEverything() {
    this.items.remove();
  }
}
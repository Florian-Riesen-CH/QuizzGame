import { Component, Input } from '@angular/core';
import { Player, Team } from '../player';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  constructor(private db: AngularFireDatabase) { }


  ngOnInit():void{
    /*const ref = this.db.list("items");
    ref.valueChanges().subscribe((data) =>{
      this.data = data;
      console.log(data);
    }) */
  }

}

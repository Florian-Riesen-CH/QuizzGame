import { Component } from '@angular/core';
import { MatchesHistory } from '../player';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-matches-history',
  templateUrl: './matches-history.component.html',
  styleUrls: ['./matches-history.component.css']
})
export class MatchesHistoryComponent {
  matchesHistory: MatchesHistory[] = [];
  constructor(private db: AngularFireDatabase){
  }
  refMatchesHistory = this.db.list<MatchesHistory>("matchesHistory");
  ngOnInit():void{
    this.refMatchesHistory.valueChanges().subscribe((data) =>{
        this.matchesHistory = data as MatchesHistory[];
        console.log(this.matchesHistory);
    }) 
  }
}

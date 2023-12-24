import { Component, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Team } from '../player';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  teams: Team[] = [];
  teamA: Team;
  teamB: Team;
  numberPoint: number = 0;
  constructor(private db: AngularFireDatabase) { }

  refTeams = this.db.list<Team>("teams");
  refTeamA = this.db.object<Team>("teamA");
  refTeamB = this.db.object<Team>("teamB");
  refScore = this.db.object<number>("score");

  ngOnInit():void{
    this.refTeams.valueChanges().subscribe((data) =>{
      this.teams = data as Team[];
    }) 
    this.refTeamA.valueChanges().subscribe((data) =>{
      this.teamA = data as Team;
    }) 
    this.refTeamB.valueChanges().subscribe((data) =>{
        this.teamB = data as Team;
    }) 
    this.refScore.valueChanges().subscribe((data) =>{
      console.log(data);
      this.numberPoint = data as number;
    }) 
  }

}

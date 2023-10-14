import { Component } from '@angular/core';
import { Match, MatchesHistory, Team } from '../player';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  teams: Team[] = [];
  matchesHistory: MatchesHistory[] = [];
  teamA!: Team;
  teamB!: Team;
  numberPoint: number = 5;
  
  constructor(private db: AngularFireDatabase){
  }

  refTeams = this.db.list<Team>("teams");
  refTeamA = this.db.object<Team>("teamA");
  refTeamB = this.db.object<Team>("teamB");
  refMatchesHistory = this.db.list<MatchesHistory>("matchesHistory");
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
    this.refMatchesHistory.valueChanges().subscribe((data) =>{
        this.matchesHistory = data as MatchesHistory[];
    }) 
  }

  defineTeamB(teamId:number){
    this.teamB = this.teams.filter(x=>x.id == teamId)[0];
    this.refTeamB.set(this.teamB);
  }
  defineEmptyTeamB(){
    this.refTeamB.remove();
    console.log(this.teamB);
  }
  defineTeamA(teamId:number){
    this.teamA = this.teams.filter(x=>x.id == teamId)[0];
    this.refTeamA.set(this.teamA);
  }

  setWinningTeamA(){
    let loosingTeamScore:number = this.teams.filter(x=>x.id==this.teamB.id)[0].score;
    let removedScore: number = loosingTeamScore > this.numberPoint ? this.numberPoint : loosingTeamScore;

    this.teams.filter(x=>x.id==this.teamA.id)[0].score += removedScore;
    this.teams.filter(x=>x.id==this.teamB.id)[0].score -= removedScore;
    this.refMatchesHistory.push({winningTeam: this.teamA, LoosingTeam: this.teamB, score: removedScore})
    this.updateTeamList();
    this.generateNextMatch();
  }
  setWinningTeamB(){
    let loosingTeamScore:number = this.teams.filter(x=>x.id==this.teamA.id)[0].score;
    let removedScore: number = loosingTeamScore > this.numberPoint ? this.numberPoint : loosingTeamScore;
    this.teams.filter(x=>x.id==this.teamA.id)[0].score -= removedScore;
    this.teams.filter(x=>x.id==this.teamB.id)[0].score += removedScore;
    this.refMatchesHistory.push({winningTeam: this.teamB, LoosingTeam: this.teamA, score: removedScore})
    this.updateTeamList();
    this.generateNextMatch();
  }
  setDrow(){
    this.teams.filter(x=>x.id==this.teamA.id)[0].score -= this.numberPoint;
    this.teams.filter(x=>x.id==this.teamB.id)[0].score -= this.numberPoint;
    this.updateTeamList();
    this.generateNextMatch();
  }
  selectPtn(number:string){
    this.numberPoint = Number(number);
  }
  generateNextMatch(){
    this.defineTeamA(this.getNextTeam(this.teamA.id))
    this.defineEmptyTeamB();
    
  }

  getNextTeam(currentTeamId: number): number {
    // Filtrer les équipes avec un score supérieur à 0
    let validTeams = this.teams.filter(team => team.score > 0);

    // Trouver l'index de l'équipe actuelle dans le tableau original
    let currentIndexInAllTeams = this.teams.findIndex(team => team.id === currentTeamId);

    // Si l'équipe avec l'ID donné n'est pas trouvée
    if (currentIndexInAllTeams === -1) {
        return -1;  // Indique une erreur
    }

    // Trouver l'équipe suivante valide
    let nextTeamIndex = (currentIndexInAllTeams + 1) % this.teams.length;
    while (this.teams[nextTeamIndex].score <= 0) {
        nextTeamIndex = (nextTeamIndex + 1) % this.teams.length;
    }

    return this.teams[nextTeamIndex].id;
}


  updateTeamList(){
    this.refTeams.remove();
    this.teams.forEach(element => {
      this.refTeams.push(element);
    });
  }
}

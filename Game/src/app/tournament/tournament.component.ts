import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Player, Team } from '../player';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent {
  players: Player[] = [];
  teams: Team[] = [];
  constructor(private db: AngularFireDatabase){
  }

  refPlayer = this.db.list<Player>("players");
  refTeams = this.db.list<Team>("teams");
  ngOnInit():void{
    this.refPlayer.valueChanges().subscribe((data) =>{
      this.players = data as Player[];
    }) 
    this.refTeams.valueChanges().subscribe((data) =>{
      this.teams = data as Team[];
    }) 
  }

  GetData(newItem: Team[]){
    this.teams = [...newItem];
  }
  genereateTeam(): void{
    this.teams = [];
    let randomPlayer: Player[] = [];
    this.players.forEach(val => randomPlayer.push(Object.assign({}, val)));
    this.shuffleArray(randomPlayer);
    
    for(let num = 0; num < randomPlayer.length; num += 2){
      var maxId = this.teams.length === 0 ? 0 : Math.max(...this.teams.map(o => o.id));
      var teamPlayers: Player[] = [];
      teamPlayers.push(randomPlayer[num]);
  
      // Si il n'y a pas de prochain joueur et le nombre de joueurs est impair, break la boucle.
      if(num + 1 === randomPlayer.length) {
          break;
      }
  
      teamPlayers.push(randomPlayer[num + 1]);
  
      let team: Team = {id: maxId + 1, players: teamPlayers, score: 50, position:1};
      this.teams.push(team);
    }
    // Si le nombre de joueurs est impair, ajoutez le dernier joueur à une équipe existante.
    if(randomPlayer.length % 2 !== 0) {
        this.teams[this.teams.length - 1].players.push(randomPlayer[randomPlayer.length - 1]);
    }
    
    this.refTeams.remove();
    this.teams.forEach(element => {
      this.refTeams.push(element);
    });
    //this.cookieService.set('teamsList', JSON.stringify(this.teams));
  }
  shuffleArray(array: Player[]):Player[] {
    var m = array.length, t, i;
 
    while (m) {    
     i = Math.floor(Math.random() * m--);
     t = array[m];
     array[m] = array[i];
     array[i] = t;
    }
 
   return array;
 }
}
  


import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { Player, Team } from '../../player';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

 
  players: Player[] = [];
  constructor(private db: AngularFireDatabase) {
    
    
  }
  ref = this.db.list<Player>("players");

  addPlayer(title: string): void {
        
    if (this.players.length !== 0) {
      let maxId = Math.max(...this.players.map(x=>x.id)) + 1;
      let player: Player = {id : maxId, name: title}
      this.ref.push(player);
    } else {
      let player: Player = {id : 1, name: title}
      this.ref.push(player);
    }
    //this.cookieService.set('playersList', JSON.stringify(this.players));

  }

  ngOnInit():void{
    const ref = this.db.list("players");
    ref.valueChanges().subscribe((data) =>{
      this.players = data as Player[];
    }) 
  }

  removePlayer(id: Number):void{
    this.players = this.players.filter(function( obj ) {
      return obj.id !== id;
    });
    this.ref.remove();
    this.players.forEach(element => {
      this.ref.push(element);
    });
    

    //this.cookieService.set('playersList', JSON.stringify(this.players));

  

  }

 



}

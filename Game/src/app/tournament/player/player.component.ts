import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { Player, Team } from '../../player';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {


  @Input() players: Player[] = [];
  constructor(private cookieService: CookieService) {
    
    
  }

  addPlayer(title: string): void {
    var maxId = Math.max(...this.players.map(o => o.id));
    if (this.players.length == 0) {
      this.players.push({ id:1, name:title });
    } else {
      this.players.push({ id:(maxId+1), name:title });
    }
    this.cookieService.set('playersList', JSON.stringify(this.players));
  }

  removePlayer(id: Number):void{
    this.players = this.players.filter(function( obj ) {
      return obj.id !== id;
    });
    this.cookieService.set('playersList', JSON.stringify(this.players));
  }

 



}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player, Team } from '../../player';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  constructor(private cookieService: CookieService){}

  @Input()teams: Team[] = [];
  @Output()teamsChange = new EventEmitter<Team[]>();

  addPoint(number: Number):void{
    this.teams.filter(x=>x.id == number)[0].score += 10;
    this.cookieService.set('teamsList', JSON.stringify(this.teams));
    this.teamsChange.emit(this.teams);
  }
  removePoint(number: Number):void{
    this.teams.filter(x=>x.id == number)[0].score -= 10;
    this.cookieService.set('teamsList', JSON.stringify(this.teams));
    this.teamsChange.emit(this.teams);
  }
}

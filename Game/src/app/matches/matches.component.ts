import { Component, Input } from '@angular/core';
import { Player, Team } from '../player';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  @Input() players: Player[] = [];
  @Input() teams: Team[] = [];

}

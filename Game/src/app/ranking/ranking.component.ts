import { Component, Input, OnChanges,SimpleChanges,ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { OutletContext } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Team } from '../player';

@Component({
  selector: 'app-ranking',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent  {
  @Input() teams: Team[] = [];
  constructor(private db: AngularFireDatabase){
    
  }
  ngOnChanges(){
    this.teams = [...this.teams];
    var position =1;
    this.teams.sort((a,b) => a.score - b.score).reverse().forEach(x=>x.position = position++);
  }
}

import { Component, Input, OnChanges,SimpleChanges,ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { OutletContext } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Team } from 'src/app/player';

@Component({
  selector: 'app-ranking',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnChanges  {
  rankingList :Team[] = [];
  @Input()teams: Team[] = [];
  constructor(){
  }
  ngOnChanges(changes: SimpleChanges) {
    this.rankingList = [...this.teams];
    var position =1;
    this.rankingList.sort((a,b) => a.score - b.score).reverse().forEach(x=>x.position = position++);
  }
}

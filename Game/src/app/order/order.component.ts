import { Component, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Team } from '../player';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  teams: Team[] = [];
  constructor(private db: AngularFireDatabase){
    
  }
  refTeams = this.db.list<Team>("teams");
  ngOnInit():void{
    this.refTeams.valueChanges().subscribe((data) =>{
      this.teams = data as Team[];
    }) 
  }
  ngOnChanges(){
    this.teams = [...this.teams];
    var position =1;
    this.teams.sort((a,b) => a.id - b.id).forEach(x=>x.position = position++);
  }
}

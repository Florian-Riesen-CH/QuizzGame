import { Component } from '@angular/core';
import { Team } from '../player';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  teams: Team[] = [];
  constructor(private db: AngularFireDatabase){
  }

  refTeams = this.db.list<Team>("teams");
  ngOnInit():void{
    this.refTeams.valueChanges().subscribe((data) =>{
      this.teams = data as Team[];
    }) 
  }
}

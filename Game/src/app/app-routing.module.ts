import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentComponent } from './tournament/tournament.component';
import { MatchesComponent } from './matches/matches.component';
import { AdminComponent } from './admin/admin.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: '', component: TournamentComponent },
  { path: 'team-component', component: TournamentComponent },
  { path: 'matches-component', component: MatchesComponent },
  { path: 'admin-component', component: AdminComponent },
  { path: 'ranking-component', component: RankingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

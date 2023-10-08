import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentComponent } from './tournament/tournament.component';
import { MatchesComponent } from './matches/matches.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: TournamentComponent },
  { path: 'team-component', component: TournamentComponent },
  { path: 'matches-component', component: MatchesComponent },
  { path: 'admin-component', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

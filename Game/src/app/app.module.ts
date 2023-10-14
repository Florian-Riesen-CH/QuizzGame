import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MatchesComponent } from './matches/matches.component';
import { TournamentComponent } from './tournament/tournament.component'
import { PlayerComponent } from './tournament/player/player.component';
import { RankingComponent } from './ranking/ranking.component';
import { TeamComponent } from './tournament/team/team.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './order/order.component';
import { MatchesHistoryComponent } from './matches-history/matches-history.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MatchesComponent,
    TournamentComponent,
    PlayerComponent,
    RankingComponent,
    TeamComponent,
    AdminComponent,
    OrderComponent,
    MatchesHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

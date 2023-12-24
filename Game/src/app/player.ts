export class Player {
    id: number;
    name: string;
}
export class Team {
    id:number;
    players: Player[];
    score: number;
    position: number;
}
export class Match {
    id:number;
    teamA: Team;
    teamB: Team;
    score: number;
    winningTeam: Team;
}

export class MatchesHistory {
    winningTeam: Team;
    LoosingTeam: Team;
    score: number;
}
export interface Player {
    id: number;
    name: string;
}
export interface Team {
    id:number;
    players: Player[];
    score: number;
    position: number;
}

export interface Match {
    id:number;
    teamA: Team;
    teamB: Team;
    score: number;
    winningTeam: Team;
}
class Player {
    constructor(id, token) {
        this.id = id;
        this.token = token;
        this.wins = 0;
    }
    thisIncreasedWins() {
        this.wins += 1;
    }
}

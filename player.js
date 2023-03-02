class player {
    constructor(player) {
        this.id = Date.now();
        this.token = player.token
        this.playerOne = player.one
        this.playerTwo = player.two
        this.wins = 0
    }
    thisIcreasedWins() {
        this.wins += 1
    }
}

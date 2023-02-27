class GuessingGame {
    constructor() {
        let currentGuess = null
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.currentGuess = this.min + Math.ceil((this.max - this.min) / 2)
        return this.currentGuess
    }

    lower() {
        this.max = this.currentGuess
        this.setRange(this.min, this.max)
    }

    greater() {
        this.min = this.currentGuess
        this.setRange(this.min, this.max)
    }
}

module.exports = GuessingGame;

import {Furry} from "./furry.js";
import {Coin} from "./coin.js";

class Game {

    constructor() {
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.board = $('#board').find('div');
        this.index = (x, y) => {
            return x + (y * 10);
        }
    }

    showFurry() {
        this.hideVisibleFurry();
        if (this.furry.y >= 0 && this.furry.y <= 9) {
            this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
        }
    }

    showCoin() {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    }

    startGame() {
        let self = this;
        this.idSetInterval = setInterval(function () {
            self.moveFurry();
            self.showFurry();
            self.checkCollision();
            self.gameOver();
        }, 350)
    }

    moveFurry() {
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        }
    }

    hideVisibleFurry() {
        let div = $('#board div');
        div.removeClass('furry');
    }

    turnFurry(event) {
        switch (event.which) {
            case 37:
                this.furry.direction = "left";
                break;
            case 38:
                this.furry.direction = "up";
                break;
            case 39:
                this.furry.direction = "right";
                break;
            case 40:
                this.furry.direction = "down";
                break;
        }
    }

    checkCollision() {
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
            $('#board div').removeClass('coin');
            this.score++;
            $('#score').find('strong').text(this.score);
            this.coin = new Coin();
            this.showCoin();
        }
    }

    gameOver() {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            clearInterval(this.idSetinterval);
            location.reload();
            alert(`Koniec gry! Twoje punkty: ${this.score}`);
        }
    }

}
export {Game};
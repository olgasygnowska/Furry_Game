import {Game} from "./game.js";

$(() => {
    let game = new Game();
    game.showCoin();
    game.showFurry();
    game.startGame();
    document.addEventListener('keydown', function(event){
        game.turnFurry(event);
    });

});
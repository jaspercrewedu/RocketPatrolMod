let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
    inputMouse: true
}


let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding  = borderUISize / 3;

let keyF, keyR, keyLEFT, keyRIGHT, mouseClick;

/**
 * Justin Hu
 * RocketPatrolMod
 * 4/18/22
 * ~ 5 hours to complete
 * 
 * 30 points - Simultaneous 2 Player Mode
 * 20 points - Mouse Control
 * 20 points - New Spaceship Type
 * 20 points - Timer system that gets added to on hit
 * 10 points - Visible Timer
 * 
 * 
 */
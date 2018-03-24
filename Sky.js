function preload() {

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('phaser', 'sprites/phaser-dude.png');
    
  

}

function create() {

    var sprite = game.add.sprite(0, 0, 'phaser');

}
var game = new Phaser.Game(800,890)

game.state.add('main', {
    preload,
    create,
})

game.state.start('main')
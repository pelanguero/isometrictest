var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};
var cuboW=110
var cuboH=126
var yoff=32
var xoff=55
var game = new Phaser.Game(config);

function preload ()
{
    
    this.load.spritesheet('balls', 'assets/tilesheet_complete.png', { frameWidth: cuboW, frameHeight: cuboH });
}

function create ()
{
    

    this.add.sprite(55, 63, 'balls', 0);
    this.add.sprite(110,32+126,"balls",2);
    this.add.sprite(110, 95, 'balls', 1);
    
    
}
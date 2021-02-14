/** @type Phaser.Types.Core.GameConfig */
var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 900,
    scaleMode: Phaser.Scale.FIT,
    backgroundColor: 0x112233,

    scene: [TitleScreen,MainMenu,UpgradeScreen,Hud]

}

new Phaser.Game(config)
/** @type Phaser.Types.Core.GameConfig */
var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 900,
    scaleMode: Phaser.Scale.FIT,
    backgroundColor: 0x112233,
    hidePhaser: true,
    scene: [TitleScreen, Hud, MainMenu, UpgradeScreen],
    gameVersion: "0.01",
    gameTitle: "First Phaser Game"

}

new Phaser.Game(config)
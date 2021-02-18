class UpgradeScreen extends Phaser.Scene {
    constructor() {
        // Names the level UpgradeScreen
        super("UpgradeScreen")

        // Variables
        // Closing button
        this.closingUpgradeMenuButton = null;
        this.closingUpgradeMenuButtonText = null;

        // Cps upgrades
        this.coinsPerSecondButton = null;
        this.coinsPerSecondButtonText = null;


    }

    init() {
        this.Hud = this.scene.get("Hud")
    }

    preload() {

    }

    create() {
        // Coins Per Sec Upgrade
        // Creates the rectangle for the button
        this.coinsPerSecondButton = this.add.rectangle(800, 600, 100, 50, 0xff0000)

        // Sets coinsPerSecondButton to interactive
        this.coinsPerSecondButton.setInteractive()


    }

    update() {

    }

    onClickCloseUpgradeMenu() {
        this.scene.start("MainMenu")
    }


}
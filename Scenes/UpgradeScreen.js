class UpgradeScreen extends Phaser.Scene {
    constructor() {
        // Names the level UpgradeScreen
        super("UpgradeScreen")

        // Variables
        // Closing button
        this.closingUpgradeMenuButton = null;
        this.closingUpgradeMenuButtonText = null;

        // Cps upgrades
        this.coinsPerSecondUpgradeButton = null;
        this.coinsPerSecondButtonText = null;

        // Exit button
        this.UpgradeScreenExitButton = null;
        this.UpgradeScreenExitButtonX = null;
    }

    init() {
        this.Hud = this.scene.get("Hud")
    }

    preload() {

    }

    create() {
        // Coins Per Sec Upgrade
        // Creates the rectangle for the button
        this.coinsPerSecondUpgradeButton = this.add.rectangle(800, 600, 100, 50, 0xff0000)

        // Sets coinsPerSecondButton to interactive
        this.coinsPerSecondButton.setInteractive()

        // Sets the "coinsPerSecond" to an on state of interaction
        this.coinsPerSecondButton.on("pointerdown")

        // Exit Upgrade Menu Button
        // Draws the rectangle for the button
        this.UpgradeScreenExitButton = this.add.rectangle(1600, 900, 30, 30, 0xff0000)

        // sets "UpgradeScreenExitButton" to interactive
        this.UpgradeScreenExitButton.setInteractive()

        // Turns the "UpgradeScreenExitButton" to an on state of interaction
        this.UpgradeScreenExitButton.on("pointerdown", this.onClickCloseUpgradeMenu, this)
    }

    update() {

    }

    onClickCloseUpgradeMenu() {
        this.scene.start("MainMenu")
    }

    onClickUpgradeCoinsPerSec() {
        this.Hud.coinsPerSecond += this.Hud.coinsPerSecondAddAmount
    }


}
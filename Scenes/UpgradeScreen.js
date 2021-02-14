class UpgradeScreen extends Phaser.Scene
{
    constructor()
    {
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

    init()
    {
        this.Hud = this.scene.get("Hud")
    }

    preload()
    {

    }

    create()
    {
        

    }

    update()
    {

    }

    onClickCloseUpgradeMenu()
    {
        this.scene.launch("MainMenu")
    }
}
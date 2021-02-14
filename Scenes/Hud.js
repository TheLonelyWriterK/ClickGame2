class Hud extends Phaser.Scene
{
    constructor()
    {
        // Names the level "Hud"
        super("Hud")

        // Variables
        this.money = 0;
        this.coinsPerSecond = 0;
        this.moneyAddAmount = 1;

    }

    init()
    {

    }

    preload()
    {

    }

    create()
    {
        // Draws the text for the money counter
        this.moneyButtonText = this.add.text(800,50,"Money: " + this.money).setOrigin(0.5)

        // Draws the text for the CPS counter
        this.coinsPerSecondText = this.add.text(800,100,"Coins Per Second:" + this.coinsPerSecond).setOrigin(0.5)
    }

    update()
    {
        this.moneyButtonText.setText("Money: " + this.money)
    }

    onClickCloseUpgradeMenu()
    {

    }

    onClickUpgradeCPS()
    {

    }
}
class UpgradeScreen extends Phaser.Scene
{
    constructor()
    {
        // Names the level UpgradeScreen
        super("UpgradeScreen")

        // Variables
            // Money Button
            this.moneyButton = null;
            // Money Button Text
            this.moneyButtonText = null;
            // Money
            this.money = null;
            // Coins Per Second
            this.coinsPerSecond = null;
    }

    init()
    {

    }

    preload()
    {

    }

    create()
    {
        // Money Button
            // Creates the rectangle for the money button
            this.moneyButton = this.add.rectangle(800,450,50,50,0x110022)

    }

    update()
    {

    }

    onClickAddMoney()
    {

    }
}
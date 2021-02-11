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
    }

    init()
    {

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

    onClickAddMoney()
    {
        this.money += 1;
    }
}
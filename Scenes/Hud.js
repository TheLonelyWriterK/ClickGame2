class Hud extends Phaser.Scene
{
    constructor()
    {
        // Names the level "Hud"
        super("Hud")

        // Variables
        // Money
        this.money = 0;
        // How much money is added each click
        this.moneyAddAmount = 1;
        // The Coins Per Second
        this.coinsPerSecond = 0;
        // 


        

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
        // Updates the "moneyButtonText" text
        this.moneyButtonText.setText("Money: " + this.money).setOrigin(0.5)

        // Updates the "moneyButtonText" text
        this.coinsPerSecondText.setText("Coins Per Second: " + this.coinsPerSecond).setOrigin(0.5)
    }

    

    onClickUpgradeCPS()
    {
        this.coinsPerSecond += 1;
    }
}
class MainMenu extends Phaser.Scene
{
    constructor()
    {
        // Names the level MainMenu
        super("MainMenu")

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
        // Money Button
            // Creates the rectangle for the money button
            this.moneyButton = this.add.rectangle(800,450,50,50,0x110022)

    }

    update()
    {

    }
}
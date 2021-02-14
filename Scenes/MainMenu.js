class MainMenu extends Phaser.Scene
{
    constructor()
    {
        // Names the level MainMenu
        super("MainMenu")

        // Variables
            // Money Button
            this.moneyButton = null;
            this.moneyButtonText = null;

            
            
    }


    init()
    {
        // Import variables from
        this.Hud = this.scene.get("Hud")
    }


    preload()
    {

    }


    create()
    {
        // Money Button
            // Creates the rectangle for the money button
            this.moneyButton = this.add.rectangle(800,450,50,50,0x110022)

            // Sets the "moneyButton" as interactive
            this.moneyButton.setInteractive()

            // Sets the "moneyButton" as on state of interactive
            this.moneyButton.on("pointerdown",this.onClickAddMoney,this)

            // 
        // 
    }


    update()
    {

    }

    
    onClickAddMoney()
    {
        this.money += 1;
    }

    onClickOpenUpgradeMenu()
    {
        this.scene.start("MainMenu");
    }
}
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

            // Upgrade Menu Button
            this.upgradeMenuButton = null;
            this.upgradeMenuButtonText = null;
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
        // Money Button
            // Creates the rectangle for the money button
            this.moneyButton = this.add.rectangle(800,450,100,50,0x110022)

            // Sets the "moneyButton" as interactive
            this.moneyButton.setInteractive()

            // Sets the "moneyButton" as on state of interactive
            this.moneyButton.on("pointerdown",this.onClickAddMoney,this)

        // Upgrade Menu Button
            // Creates the rectangle for the upgrade menu opening button
            this.upgradeMenuButton = this.add.rectangle()
    }


    update()
    {

    }

    
    onClickAddMoney()
    {
        this.Hud.money += this.Hud.moneyAddAmount;
        console.log(this.Hud.money)
    }


    onClickOpenUpgradeMenu()
    {
        this.scene.start("UpgradeMenu");
    }
}
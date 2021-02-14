class TitleScreen extends Phaser.Scene
{
    constructor()
    {
        // Names the level TitleScreen
        super("TitleScreen")
        
        // Variables
        this.startButton = null;
        this.startButtonText = null;

            
    }


    init()
    {

    }


    preload()
    {

    }


    create()
    {
        // Logs the start screen began loading
        console.log("Loading Scene: Start Screen")


        // Start Button
            // Creates the start button
            this.startButton = this.add.rectangle(800,450,100,100,0xff0000)

            // Makes the start button interactive
            this.startButton.setInteractive()

            // Turns the button into an "on" state of interaction
            this.startButton.on("pointerdown",this.onClickStartGame,this)

        // Start Text
        this.startButtonText = this.add.text(775,440,"Start")


        // Logs the start screen has finished loading
        console.log("Scene Loaded: Start Screen")
    }


    update()
    {
        
    }


    // Creates a function for when a "Click" event has happened
    onClickStartGame()
    {
        // Logs that the "MainMenu" scene is loading
        console.log("Loading Scene: MainMenu")


        // Loads the "MainMenu" scene
        this.scene.start("MainMenu")


        // Logs that the "MainMenu" scene has been loaded
        console.log("Scene Loaded: MainMenu")

        // Logs tat the "Hud" scene is loading
        console.log("Loading Scene: Hud")

        // Loads the "Hud" scene
        this.scene.launch("Hud")

        // Logs tat the "Hud" scene is loading
        console.log("Scene Loaded: Hud")
    }
}
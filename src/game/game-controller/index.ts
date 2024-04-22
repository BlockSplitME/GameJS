import {Application, type ApplicationOptions} from 'pixi.js'
import {gameModel} from "@/game/game-model";

export class gameController {
    private readonly domElement;
    private readonly app;
    private model;

    constructor(elementId: string) {
        this.domElement = document.getElementById(elementId);
        this.app = new Application();
    }

    async run (): Promise<void> {
        await this.app.init({resizeTo: this.domElement, background: '#BDECB6'} as ApplicationOptions);

        this.model = new gameModel(this.app, this.domElement)

        this.model.launchGame()
    }
}
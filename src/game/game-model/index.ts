import {type Application, Assets} from "pixi.js";
import {hero} from "@/game/game-model/entities/hero";

export class gameModel {
    private app: Application;

    constructor(app: Application, domElement: HTMLElement) {
        this.app = app
        this.setupCanvas(domElement)
        this.assetsLoad()
    }

    setupCanvas (domElement: HTMLElement): void {
        domElement?.appendChild(this.app.canvas)
        // window.addEventListener('resize', this.resizeDeBounce)
    }

    async assetsLoad() {
        await Assets.load([
            {
                alias: 'spineSkeleton',
                src: 'https://raw.githubusercontent.com/pixijs/spine-v8/main/examples/assets/spineboy-pro.skel',
            },
            {
                alias: 'spineAtlas',
                src: 'https://raw.githubusercontent.com/pixijs/spine-v8/main/examples/assets/spineboy-pma.atlas',
            },
            {
                alias: 'sky',
                src: 'https://pixijs.com/assets/tutorials/spineboy-adventure/sky.png',
            },
            {
                alias: 'background',
                src: 'https://pixijs.com/assets/tutorials/spineboy-adventure/background.png',
            },
            {
                alias: 'midground',
                src: 'https://pixijs.com/assets/tutorials/spineboy-adventure/midground.png',
            },
            {
                alias: 'platform',
                src: 'https://pixijs.com/assets/tutorials/spineboy-adventure/platform.png',
            },
        ]);
    }

    launchGame() {
        const spineBoy = new hero();

        // Adjust character transformation.
        spineBoy.view.x = this.app.screen.width / 2;
        spineBoy.view.y = this.app.screen.height - 80;
        spineBoy.spine.scale.set(0.5);

        // Add character to the stage.
        this.app.stage.addChild(spineBoy.view);
    }
}
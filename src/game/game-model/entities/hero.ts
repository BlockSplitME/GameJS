import { Container, type ContainerChild } from 'pixi.js'
import { Spine } from '@pixi/spine-pixi';

export class hero {
    public view: Container<ContainerChild>;
    public spine: any;

    constructor() {
        this.view = new Container()

        this.spine = Spine.from({
            skeleton: 'spineSkeleton',
            atlas: 'spineAtlas',
        });

        // Add the spine to the main view.

        this.view.addChild(this.spine);
    }
}
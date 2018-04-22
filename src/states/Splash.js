import Phaser from 'phaser';
import {centerGameObjects} from '../utils';

export default class extends Phaser.State {
    preload() {
        this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
        this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
        centerGameObjects([this.loaderBg, this.loaderBar]);

        this.load.setPreloadSprite(this.loaderBar);

        /** Load your assets */
        this.load.image('background-day', 'assets/images/sprites/background-day.png');
        this.load.image('base', 'assets/images/sprites/base.png');
        this.load.image('gameover', 'assets/images/sprites/gameover.png');
        this.load.spritesheet('bird_yellow', 'assets/images/sprites/yellowbird.png', 36, 26);
    }

    create() {
        this.state.start('Game');
    }
}

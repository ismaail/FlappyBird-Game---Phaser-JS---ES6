/* globals __DEV__ */
import Phaser from 'phaser';
import Backround from '../sprites/Backround';

export default class extends Phaser.State {
    init() {
    }

    preload() {
    }

    create() {
        this.addBackground();
        this.addBase();
    }

    addBackground() {
        this.backgroundDay = new Backround({
            game: this.game,
            x:0,
            y: -1 * (this.game.cache.getImage('base').height + 32),
            width: this.game.width,
            height: this.game.cache.getImage('background-day').height,
            asset: 'background-day',
        });

        this.backgroundDay.setSpeed(0.10);

        this.game.add.existing(this.backgroundDay);
    }

    addBase() {
        this.base = new Backround({
            game: this.game,
            x: 0,
            y: this.game.height - this.game.cache.getImage('base').height,
            width: this.game.width,
            height: this.game.cache.getImage('base').height,
            asset: 'base',
        });

        this.base.setSpeed(1);

        this.game.add.existing(this.base);
    }

    render() {
        if (__DEV__) {
            // this.game.debug.spriteInfo(this.mushroom, 32, 32);
        }
    }
}

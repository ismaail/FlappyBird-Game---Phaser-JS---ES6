/* globals __DEV__ */
import Phaser from 'phaser';
import Backround from '../sprites/Backround';
import Bird from '../sprites/Bird';

export default class extends Phaser.State {
    create() {
        this.addBackground();
        this.addBase();
        this.addBird();

        // Enable Physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.enable([this.base, this.bird], Phaser.Physics.ARCADE);
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

    addBird() {
        this.bird = new Bird({
            game: this.game,
            x: 50,
            y: 50,
            asset: 'bird_yellow'
        });

        this.game.add.existing(this.bird);
    }

    update() {
        this.game.physics.arcade.overlap(this.base, this.bird, (base, bird) => {
            this.state.start('GameOver');
        });
    }

    render() {
        if (__DEV__) {
            this.game.debug.spriteInfo(this.bird, 5, 15);
        }
    }
}

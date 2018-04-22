/* globals __DEV__ */
import Phaser from 'phaser';
import Bird from '../sprites/Bird';
import Backround from '../sprites/Backround';

/**
 * Game Class
 */
export default class extends Phaser.State {
    /**
     * State Create
     */
    create() {
        this.addBackgrounds();
        this.addBird();

        // Enable Physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.enable([this.base, this.bird], Phaser.Physics.ARCADE);

        // Audio
        this.audio = {};
        this.audio.hit = this.game.add.audio('hit');
    }

    /**
     * Add Backgrounds
     */
    addBackgrounds() {
        this.backgroundDay = new Backround({
            game: this.game,
            x:0,
            y: -1 * (this.game.cache.getImage('base').height + 32),
            width: this.game.width,
            height: this.game.cache.getImage('background-day').height,
            asset: 'background-day',
        });

        this.base = new Backround({
            game: this.game,
            x: 0,
            y: this.game.height - this.game.cache.getImage('base').height,
            width: this.game.width,
            height: this.game.cache.getImage('base').height,
            asset: 'base',
        });

        this.backgroundDay.setSpeed(0.10);
        this.base.setSpeed(1);

        this.game.add.existing(this.backgroundDay);
        this.game.add.existing(this.base);
    }

    /**
     * Add the Bird
     */
    addBird() {
        this.bird = new Bird({
            game: this.game,
            x: this.game.width/2 - 50,
            y: this.game.width/2 - 100,
            asset: 'bird_yellow',
        });

        this.game.add.existing(this.bird);
    }

    /**
     * State Update
     */
    update() {
        this.game.physics.arcade.overlap(this.base, this.bird, (base, bird) => {
            this.audio.hit.play();
            this.state.start('GameOver');
        });
    }

    /**
     * State Render
     */
    render() {
        if (__DEV__) {
            this.game.debug.spriteInfo(this.bird, 5, 15);
        }
    }
}

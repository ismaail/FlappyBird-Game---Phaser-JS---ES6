import Phaser from 'phaser';

/**
 * Class Bird
 */
export default class extends Phaser.Sprite {
    /**
     * Class Constructor
     *
     * @param {Game} game
     * @param {number} x
     * @param {number} y
     * @param {string} asset
     */
    constructor({game, x, y, asset}) {
        super(game, x, y, asset);

        this.anchor.setTo(0.5, 0.5);

        this.velocity = 0;
        this.rotation = 0;
        this.gravity = 0.25;
        this._jump = 4.6;

        game.input.onTap.add(() => this.jump());

        this.fly();
    }

    /**
     * Fly animation
     */
    fly() {
        this.animations.add('fly');
        this.animations.play('fly', 15, true);
    }

    /**
     * Makes the bird "flap" and jump
     */
    jump() {
        this.velocity = -this._jump;
    }

    /**
     * State Update
     */
    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.velocity >= this._jump) {
            this.rotation = Math.min(Math.PI/2, this.rotation + 0.3);
        } else {
            this.rotation = -0.3;
        }

        // Prevent from going up out of the screen
        if (this.y <= this.height / 2) {
            this.y = this.height / 2;
        }
    }
}

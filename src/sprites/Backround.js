import Phaser from 'phaser';

export default class extends Phaser.TileSprite {
    /**
     * @param {Phaser.Game} game
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {string} asset
     * @param {string?} frame
     */
    constructor({game, x, y, width, height, asset, frame}) {
        super(game, x, y, width, height, asset, frame);

        this.speed = 0;
    }

    /**
     * Set Speed
     *
     * @param {number} speed
     */
    setSpeed(speed) {
        this.speed = speed;
    }

    update() {
        this.tilePosition.x -= this.speed;
    }
}

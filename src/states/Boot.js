import Phaser from 'phaser';
import config from '../config';

/**
 * Boot State
 */
export default class extends Phaser.State {
    /**
     * State Init
     */
    init() {
        this.stage.backgroundColor = config.bgColor;
    }

    /**
     * State Preload
     */
    preload() {
        this.drawLoadingText();
        this.loadAssets();
    }

    /**
     * Draw 'Loading...' text
     */
    drawLoadingText() {
        let text = this.add.text(this.world.centerX, this.world.centerY, 'Loading...', {
            font: '18px Courier',
            fill: '#fff',
            align: 'center',
        });

        text.anchor.setTo(0.5, 0.5);
    }

    /**
     * Load Game Assets
     */
    loadAssets() {
        this.load.image('background-day', 'assets/images/sprites/background-day.png');
        this.load.image('base', 'assets/images/sprites/base.png');
        this.load.image('gameover', 'assets/images/sprites/gameover.png');
        this.load.image('main_menu', 'assets/images/sprites/main_menu.png');
        this.load.spritesheet('bird_yellow', 'assets/images/sprites/yellowbird.png', 36, 26);
    }

    /**
     * State Render
     */
    render() {
        this.state.start('Splash');
    }
}

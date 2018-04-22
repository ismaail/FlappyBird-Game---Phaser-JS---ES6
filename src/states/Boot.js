import Phaser from 'phaser';
import config from '../config';

/**
 * Boot State
 */
export default class extends Phaser.State {
    init() {
        this.stage.backgroundColor = config.bgColor;
    }

    preload() {
        this.drawLoadingText();
        this.loadImages();
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
     * Load Loader image assets
     */
    loadImages() {
        this.load.image('loaderBg', './assets/images/loader-bg.png');
        this.load.image('loaderBar', './assets/images/loader-bar.png');
    }

    render() {
        this.state.start('Splash');
    }
}

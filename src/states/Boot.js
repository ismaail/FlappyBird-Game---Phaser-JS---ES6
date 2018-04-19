import Phaser from 'phaser';
import WebFont from 'webfontloader';
import config from '../config';

/**
 * Boot State
 */
export default class extends Phaser.State {
    init() {
        this.stage.backgroundColor = config.bgColor;
        this.fontsReady = false;
        this.fontsLoaded = this.fontsLoaded.bind(this);
    }

    preload() {
        if (config.webfonts.length) {
            WebFont.load({
                google: {
                    families: config.webfonts,
                },
                active: this.fontsLoaded,
            });
        }

        this.drawLoadingText();

        this.loadImages();
    }

    drawLoadingText() {
        let text = this.add.text(this.world.centerX, this.world.centerY, 'loading...', {
            font: '16px Arial',
            fill: '#fff',
            align: 'center',
        });

        text.anchor.setTo(0.5, 0.5);
    }

    loadImages() {
        this.load.image('loaderBg', './assets/images/loader-bg.png');
        this.load.image('loaderBar', './assets/images/loader-bar.png');
    }

    render() {
        if (config.webfonts.length && this.fontsReady) {
            this.state.start('Splash');
        }

        if (! config.webfonts.length) {
            this.state.start('Splash');
        }
    }

    fontsLoaded() {
        this.fontsReady = true;
    }
}

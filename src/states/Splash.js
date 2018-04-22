import Phaser from 'phaser';

/**
 * MainMenu Class
 */
export default class extends Phaser.State {
    /**
     * State Create
     */
    create() {
        let image = this.game.add.image(this.game.width/2, this.game.height/2, 'main_menu');
        image.anchor.setTo(0.5, 0.5);
        this.game.add.existing(image);

        this.input.onTap.addOnce(() => this.game.state.start('Game'));
    }
}

class MouseRocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }


    update() {
        if (!this.isFiring) {
            if (game.input.mousePointer.x < this.x && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            }
            else if (game.input.mousePointer.x > this.x && this.x <= game.config.width -
                borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }

        if (game.input.activePointer.isDown) {
            this.isFiring = true;
            this.sfxRocket.play();
        }


        if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }

        if (this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }

}


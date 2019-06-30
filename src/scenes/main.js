import Phaser from "phaser";
import BirdSpriteSheet from "../assets/birdsheet.png";
class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.spritesheet("birdSprites", BirdSpriteSheet, {
      frameWidth: 36,
      frameHeight: 28
    });
  }
  create(data) {
    var config = {
      key: "fly",
      frames: this.anims.generateFrameNumbers("birdSprites", {
        start: 0,
        end: 10,
        first: 1
      }),
      frameRate: 12,
      repeat: -1
    };
    this.anims.create(config);

    const { width, height } = this.game.renderer;
    this.bird = this.physics.add.sprite(width / 2, height / 2, "birdSprites");
    this.bird.setGravityY(4);
    this.bird.anims.play("fly");
    this.scale.on("resize", this.resize);
  }
  update(time, delta) {}
}

export default MainScene;

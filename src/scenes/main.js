import Phaser from "phaser";
import BirdImage from "../assets/bird.png";

class MyScene extends Phaser.Scene {
  init(data) {
    this.scale.on("resize", this.resize);
  }
  preload() {
    this.load.image("bird", BirdImage);
  }
  create(data) {
    this.add.image(400, 300, "bird");
  }
  update(time, delta) {}
  resize(
    gameSize,
    baseSize,
    displaySize,
    resolution,
    previousWidth,
    previousHeight
  ) {}
}

export default MyScene;

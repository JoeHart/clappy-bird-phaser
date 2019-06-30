import Phaser from "phaser";
import MainScene from "./scenes/main";
const config = {
  type: Phaser.AUTO,
  width: "100%",
  height: "100%",
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: MainScene
};

new Phaser.Game(config);

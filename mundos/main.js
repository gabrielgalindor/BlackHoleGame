import SceneA from "./scene1.js";

const config={
	width:1280,
	height:720,
	type:Phaser.AUTO,
	scene: [SceneA]
};
const game = new Phaser.Game(config);
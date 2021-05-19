export default class SceneA extends Phaser.Scene {



	constructor(){
		super({ key: "scenaA"});
	}

	preload(){

		console.log("pre cagandola");
		this.load.image("fondo","assets/principal/background-2.jpg");
		this.load.image("fondo2","assets/principal/background-1.png");
		this.load.image("logo","assets/principal/logus.png");
		this.load.image("btn1","assets/principal/btn1.png");
		this.load.image("btn2","assets/principal/btn2.png");
		this.load.image("btn3","assets/principal/btn3.png");
		this.load.image("btn4","assets/principal/btn4.png");

		this.bandera1 = true;

	}

	create(){
		 this.backgroud1 = this.add.tileSprite(620, 540, 1920, 1080, 'fondo');
		 this.backgroud2 = this.add.tileSprite(639, 359, 1920, 1080, 'fondo2');
		 this.backgroud2.setScale('0.67','0.66');
		 this.logus = this.add.tileSprite(228, 400, 562, 220, 'logo');
		 this.logus.setScale('0.67','0.66');
		 this.keystar = this.input.keyboard.addKey('ENTER');
	}

	update(){
		 this.backgroud1.tilePositionX -= 15;
		 if(this.keystar.isDown && this.bandera1)
		 {
		 	 this.logus.destroy();
		 	 this.button1 = this.add.image(278, 200, 'btn1', 0).setInteractive();
		 	 this.button1.setScale('0.67','0.66');
		 	 this.button2 = this.add.image(278, 286, 'btn2', 0).setInteractive();
		 	 this.button2.setScale('0.67','0.66');
		 	 this.button3 = this.add.image(278, 372, 'btn3', 0).setInteractive();
		 	 this.button3.setScale('0.67','0.66');
		 	 this.button4 = this.add.image(278, 458, 'btn4', 0).setInteractive();
		 	 this.button4.setScale('0.67','0.66');
		 	 this.bandera1 = false;
       		 
		 }
	}
}
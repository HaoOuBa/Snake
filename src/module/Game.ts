import Food from './Food';
import Panel from './Panel';
import Snake from './Snake';

export default class Game {
	food: Food = new Food();
	panel: Panel = new Panel();
	snake: Snake = new Snake();
	private direction: string = '';
	private timer: any = null;
	private isAlive: boolean = true;
	constructor() {
		this.init();
	}
	init(): void {
		/* 生成食物 */
		this.food.changePosition();
		/* 绑定键盘事件 */
		document.addEventListener('keydown', this.keyDownHandler.bind(this));
	}
	/* 点击事件触发函数 */
	keyDownHandler(event: KeyboardEvent): void {
		this.direction = event.code;
		this.run();
	}
	/* 控制蛇的移动 */
	run(): void {
		if (!this.isAlive) return;
		clearTimeout(this.timer);
		let X = this.snake.X;
		let Y = this.snake.Y;
		switch (this.direction) {
			case 'ArrowUp':
				Y -= this.snake.Height;
				break;
			case 'ArrowRight':
				X += this.snake.Width;
				break;
			case 'ArrowDown':
				Y += this.snake.Height;
				break;
			case 'ArrowLeft':
				X -= this.snake.Width;
				break;
		}
		/* 判断是否吃到了食物 */
		this.checkEat(X, Y);
		/* 赋值蛇头的位置 */
		try {
			this.snake.X = X;
			this.snake.Y = Y;
		} catch {
			alert('你凉了');
			this.isAlive = false;
		}
		this.timer = setTimeout(this.run.bind(this), 300 - (this.panel.level - 1) * 30);
	}
	/* 检查蛇是否吃到食物 */
	checkEat(X: number, Y: number) {
		if (X === this.food.X && Y === this.food.Y) {
			/* 改变食物位置 */
			this.food.changePosition();
			/* 增加一分 */
			this.panel.addScore();
			/* 蛇增加一节 */
			this.snake.addBody();
		}
	}
}

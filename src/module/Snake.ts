/*
 *
 * 生成蛇类
 *
 */
export default class Snake {
	/* 蛇 */
	element: HTMLElement;
	/* 蛇头 */
	snakeHead: HTMLElement;
	/* 蛇身 */
	snakeBodies: HTMLCollection;
	constructor() {
		this.element = document.querySelector('#snake')!;
		this.snakeHead = document.querySelector('#snake li:first-child')!;
		this.snakeBodies = this.element.getElementsByTagName('li');
	}
	/* 获取蛇头的X坐标 */
	get X() {
		return this.snakeHead.offsetLeft;
	}
	/* 获取蛇头的Y坐标 */
	get Y() {
		return this.snakeHead.offsetTop;
	}
	/* 获取蛇头宽度 */
	get Width() {
		return this.snakeHead.offsetWidth;
	}
	/* 获取蛇头高度 */
	get Height() {
		return this.snakeHead.offsetHeight;
	}
	/* 设置蛇头的X轴位置 */
	set X(value: number) {
		if (this.X === value) return;
		/* 判断蛇头是否往反方向走 */
		if (this.snakeBodies[1] && (<HTMLElement>this.snakeBodies[1]).offsetLeft === value) {
			if (value > this.X) value = this.X - this.Width;
			else value = this.X + this.Width;
		}
		/* 判断是否撞墙 */
		if (value < 0 || value > 1100 - this.Width) throw new Error('THE END!');
		this.moveBody();
		this.snakeHead.style.left = value + 'px';
		this.checkBumpSelf();
	}
	/* 设置蛇头的Y轴位置 */
	set Y(value: number) {
		if (this.Y === value) return;
		/* 判断蛇头是否往反方向走 */
		if (this.snakeBodies[1] && (<HTMLElement>this.snakeBodies[1]).offsetTop === value) {
			if (value > this.Y) value = this.Y - this.Height;
			else value = this.Y + this.Height;
		}
		/* 判断是否撞墙 */
		if (value < 0 || value > 500 - this.Height) throw new Error('THE END!');
		this.moveBody();
		this.snakeHead.style.top = value + 'px';
		this.checkBumpSelf();
	}
	/* 追加身体 */
	addBody() {
		const li = document.createElement('li');
		this.element.appendChild(li);
	}
	/* 移动身体 */
	moveBody() {
		for (let i = this.snakeBodies.length - 1; i > 0; i--) {
			let X = (<HTMLElement>this.snakeBodies[i - 1]).offsetLeft;
			let Y = (<HTMLElement>this.snakeBodies[i - 1]).offsetTop;
			(<HTMLElement>this.snakeBodies[i]).style.left = X + 'px';
			(<HTMLElement>this.snakeBodies[i]).style.top = Y + 'px';
		}
	}
	/* 检查是否撞到了自己 */
	checkBumpSelf() {
		for (let i = 1; i < this.snakeBodies.length; i++) {
			const item = <HTMLElement>this.snakeBodies[i];
			if (this.X === item.offsetLeft && this.Y === item.offsetTop) {
				throw new Error('THE END!');
				break;
			}
		}
	}
}

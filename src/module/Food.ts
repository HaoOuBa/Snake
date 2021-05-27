/*
 *
 * 定义随机食物类
 *
 */
export default class Food {
	/* 食物的DIV */
	element: HTMLElement;
	constructor() {
		/* 获取页面的食物DIV并赋值给实例 */
		this.element = document.querySelector('#food')!;
	}
	/* 获取食物X轴坐标 */
	get X(): number {
		return this.element.offsetLeft;
	}
	/* 获取食物Y轴坐标 */
	get Y(): number {
		return this.element.offsetTop;
	}
	/* 获取食物宽度 */
	get Width(): number {
		return this.element.offsetWidth;
	}
	/* 获取食物宽度 */
	get Height(): number {
		return this.element.offsetHeight;
	}
	/* 生成食物的随机位置 */
	changePosition(): void {
		const maxWidth = 1100 - this.Width;
		const maxHeight = 500 - this.Height;
		const left = Math.round(Math.random() * (maxWidth / this.Width)) * this.Width;
		const top = Math.round(Math.random() * (maxHeight / this.Height)) * this.Height;
		this.element.style.left = left + 'px';
		this.element.style.top = top + 'px';
	}
}

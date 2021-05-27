/*
 *
 * 定义面板类
 * upScore: number 每多少分升一级
 */
export default class Panel {
	private score: number = 0;
	level: number = 1;
	scoreElement: HTMLElement;
	levelElement: HTMLElement;
	constructor(public upScore: number = 5) {
		this.scoreElement = document.querySelector('#score')!;
		this.levelElement = document.querySelector('#level')!;
	}
	/* 加分 */
	addScore() {
		this.scoreElement.innerHTML = (++this.score).toString();
		/* 每增加{upScore}分，提升一个等级 */
		if (this.score % this.upScore === 0) this.addLevel();
	}
	/* 加等级 */
	private addLevel() {
		if (this.level < 10) this.levelElement.innerHTML = (++this.level).toString();
	}
}

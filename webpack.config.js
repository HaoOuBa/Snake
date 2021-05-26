const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'none',
	entry: path.join(__dirname, './src/index.ts'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		host: '127.0.0.1',
		port: 8080,
		open: true
	},
	module: {
		rules: [
			/* TS文件解析 */
			{
				test: /\.ts$/,
				use: 'ts-loader'
			},
			/* LESS文件解析 */
			{
				test: /\.less$/,
				/* 从后往前执行 */
				use: ['style-loader', 'css-loader', 'less-loader']
			}
		]
	},
	plugins: [
		/* 清除dist目录 */
		new CleanWebpackPlugin(),
		/* 启动项目进度条 */
		new ProgressBarPlugin(),
		/* 生成HTML模板 */
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
};

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
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
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			/* LESS文件解析 */
			{
				test: /\.less$/,
				/* 从后往前执行 */
				use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
			},
			/* 字体解析 */
			{
				test: /\.(ttf|eot|woff|woff2|svg)$/,
				use: 'file-loader'
			},
			/* 图片解析 */
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: 'url-loader'
			}
		]
	},
	plugins: [
		/* 清除dist目录 */
		new CleanWebpackPlugin(),
		/* 生成HTML模板 */
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	resolve: {
		extensions: ['.js', '.ts']
	}
};

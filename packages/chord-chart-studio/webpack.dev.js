/* eslint-env node */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',

	// devtool: 'inline-source-map',
	devtool: 'source-map',

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Chord Chart Studio',
			template: 'assets/index.html',
			favicon: 'assets/favicon.png',
		}),
	],

	devServer: {
		hot: true,
		static: {
			directory: path.join(__dirname, 'assets'),
			watch: true,
			publicPath: '/app',
		},
		historyApiFallback: true,
		port: 8084, // config.devServer.port,
		host: '127.0.0.1',
	},
});

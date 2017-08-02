const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
	entry: {
		index: './src/index.js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
			}, {
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ 'es2015', 'react', 'env' ]
					}
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin( 'styles/main.css' ),
		new HTMLWebpackPlugin({ template: 'index.html' })
	],
	output: {
		filename: './scripts/bundle.js',
		path: path.resolve( __dirname, 'dist' )
	}
}

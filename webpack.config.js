var webpack = require('webpack');
var path = require('path');
var APP  = path.resolve(__dirname,'src');
var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:[
		'webpack/hot/dev-server',
    	'webpack-dev-server/client?http://localhost:3000',
		'./src/index.js'
	],
	output: {
    	path: path.resolve(__dirname, 'build'), 
    	filename: 'bundle.js'
  	},
  	module: {
  		loaders:[
  			{test:/\.jsx?$/,loader:'jsx-loader'},
  			{test:/\.jsx?$/,loader:'babel-loader', exclude: /node_modules/, query:{ presets:['react','es2015']}},
  			{test:/\.css$/, loader:'style-loader!css-loader'}		
  		],
  		noParse: [/moment-with-locales/]
  	},
  	plugins:[
  		new HtmlwebpackPlugin({
  			title:'hello word'
  		}),
  		new webpack.ProvidePlugin({
      		React: "react",
      		ReactDOM: "react-dom"
   		 })		
  	],
  	resolve:{
  		extensions:['','.js','.jsx']
  	}
    externals: {
     	 'react': 'React',
     	 'react-dom':'ReactDOM'
    }
}
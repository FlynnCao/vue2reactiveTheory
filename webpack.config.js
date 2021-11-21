const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//模式
	mode:'development',
	//入口
	entry: {
		index: './src/index.js',

	},
	//插件
	plugins: [
		//htmlwebpack可将多个js脚本自动引用到输出html上
		new HtmlWebpackPlugin({
      title: 'Development',
			template:'./www/index.html' //模板入口
		}),
	],
	//出口
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true, //每次打包前清理输出文件夹
	},
	//开发模式专用-热更新服务器
	devServer: {
    static: './dist', 
		hot:true,
  },
	
};
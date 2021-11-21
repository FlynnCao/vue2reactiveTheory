import utils, {
	def
} from './utils.js'
import defineReactive from './defineReactive.js'
export default class Observer {
	constructor(value) {
		console.log('我是Observer构造器')
		//给实例 构造函数中的this只代表实例
		//添加了一个__ob__属性 值是这次new的实例
		def(value, '__ob__', this, false)
		this.walk(value)
	}
	//遍历	
	walk(value) {
		console.log('value :>> ', value);
		for(let key in value){
			defineReactive(value, key)
		}
	}	
}
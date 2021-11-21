import observe from "./observe"
export default function defineReactive(data, key, val) {
	if(arguments.length == 2){
		val = data[key] //如果key名字=val 如此处理
	}
	console.log('我是define reactive :>> ', key);
	let childOb = observe(val) //在这里把此对象的子属性的也给观察了 递归
	Object.defineProperty(data, key, {
		enumerable: true, //可枚举
		configurable: true, //可配置
		get() { //getter
			console.log('get')
			return val
		}, //setter
		set(newValue) { //@newValue 要改变的值
			console.log('set')
			if (val == newValue) {
				return
			}
			val = newValue
			childOb = observe(newValue) //设置了新值 原来的地址失效 新值也要被observe
		}
	})
}
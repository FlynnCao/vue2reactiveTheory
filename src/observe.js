import Observer from "./Observer"
export default  function (value) {
	if (typeof value != 'object'){
		return
	} //如果value不是对象 什么都不做
	//定义ob ; __ob__仅仅代表这一层定义过了响应式
	var ob
	if (typeof value.__ob__ !== 'undefined') {
		ob = value.__ob__
	} else {
		ob = new Observer(value)
	}
	return ob
}
import observe from './observe.js';
//创建Observe函数 
var obj = {
	a: {
		m:{
			n:5
		}
	},
	b: 10
}
observe(obj)
console.log('obj :>> ', obj);
obj.a.m.n = 'abc'
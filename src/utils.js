
export const def = function (obj, key, value, enumberable) {
		Object.defineProperty(obj,key,{
			value,
			enumberable,
			writable:true,
			configurable:true
		})
}
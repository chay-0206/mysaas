import { Message } from 'element-ui';

/** 拓展数组的方法 **/
/** 根据val删除数组的某些项
 * @param val 删除时查找的值
 * @param field 删除时查找的字段名
 * **/
Array.prototype.remove = function(val, field = 'id') {
	this.map((item, index) => {
		item[field] === val && this.splice(index, 1);
	});
	return this;
};

/** 根据val获取数组的某些项
 * @param val 查找的值
 * @param field 查找的字段名
 * @return <Object> 数组的项
 * **/
Array.prototype.getItem = function(val, field = 'id') {
	let result = this.filter(item => item[field] === val);
	return result.length === 1 ? result[0] : undefined;
};

let utils = {
	/* 获取当前对象的类型
     * @param obj
     * @return
     * */
	getObjType(obj) {
		return obj === undefined || obj === null
			? obj
			: obj.constructor &&
					obj.constructor.toString().match(/function\s+([^(]+)/)[1];
	},
	/** 序列化对象
     * @param <Object> 例: { a:1, b:2}
     * @return <String> 序列化的字符串,例 ?a=1&b=2
     * **/
	serialize(param, key, encode) {
		function urlEncode(param, key, encode) {
			if (param == null) return '';
			var paramStr = '';
			var t = typeof param;
			if (t == 'string' || t == 'number' || t == 'boolean') {
				paramStr +=
					'&' +
					key +
					'=' +
					(encode == null || encode
						? encodeURIComponent(param)
						: param);
			} else {
				for (var i in param) {
					var k =
						key == null
							? i
							: key +
								(param instanceof Array
									? '[' + i + ']'
									: '.' + i);
					paramStr += urlEncode(param[i], k, encode);
				}
			}
			return paramStr;
		}

		return urlEncode(param, key, encode).replace(/^&/, '?');
	},
	/** 格式化金额
     * @param str<String> 金额如'100'、'100.1'
     * @param seprate <Blooen> 是否需要用逗号分隔，默认为false
     * @return <String> 格式化后的金额,保留两位小数
     * **/
	formateMoney(str, seprate) {
		// 是否为负数
		let isPlus = /^-/.test(str);

		str = String(str).replace(/[^\d\.]/g, '');
		let result = '';
		let arr = str.split('.');
		let integer =
			String(parseInt(arr[0])) === 'NaN' ? '0' : String(parseInt(arr[0]));
		let decimal = arr[1]
			? arr[1].length > 1 ? arr[1].slice(0, 2) : arr[1] + '0'
			: '00';
		if (seprate) {
			result =
				integer.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +
				'.' +
				decimal;
		} else {
			result = integer + '.' + decimal;
		}
		result = isPlus ? '-' + result : result;
		return result;
	},
	/** 获取多少天前的日期
     * @param n <Number> 默认为0,获取当期日期
     * @return <String> 例'2017-08-31'
     * **/
	getDateBefore(n = 0) {
		function padding(number) {
			return number < 10 ? '0' + number : '' + number;
		}

		var now = new Date();
		var date = new Date(now.getTime() - n * 24 * 3600 * 1000);
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		return year + '-' + padding(month) + '-' + padding(day);
	}
};

export default utils;

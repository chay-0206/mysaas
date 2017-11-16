import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import util from 'util';
import mock from 'mock';

import ElementUI, { Message } from 'element-ui';

Vue.use(ElementUI);

// 注册全局组件

// 请求超时配置
axios.defaults.timeout = 20000;
// 状态码配置
axios.defaults.validateStatus = function(status) {
	return status >= 200 && status < 600;
};

// 缓存文件失效时间设置
axios.defaults.headers = {
	'Cache-Control': 'max-age=120',
	'Content-Type': 'application/json'
};

//添加响应拦截器
axios.interceptors.response.use(
	res => {
		let currentRouter = router.currentRoute.fullPath;
		//对响应数据做些事
		if (res.status >= 400 && res.status < 600) {
			if (res.status === 403 || res.status === 401) {
				window.location =
					'/admin/login?next=' + encodeURIComponent(currentRouter);
			} else {
				Message({
					showClose: false,
					message: res.data.message || '请求出错',
					type: 'error',
					duration: 5000
				});
			}
			return Promise.reject(res);
		} else {
			return res;
		}
	},
	error => {
		//请求错误时做些事
		Message.error('未知错误');
		return Promise.reject(error);
	}
);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
});

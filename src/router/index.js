import Vue from 'vue';
import Router from 'vue-router';
import system from 'src/system/index';
import system_role from 'src/system/role';
import log from 'src/system/log';

import page404 from 'src/components/404';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{ path: '*', component: page404 },
		{
			path: '',
			name: 'system_role',
			component: system_role
		},
		{
			path: '/system',
			component: system,
			children: [
				{ path: 'role', component: system_role },
				{ path: 'log', component: log }
			]
		}
	]
});

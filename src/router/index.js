import Vue from 'vue';
import Router from 'vue-router';
import system from '@/system/index';
import system_role from '@/system/role';

import page404 from '@/components/404';

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
			children: [{ path: 'role', component: system_role }]
		}
	]
});

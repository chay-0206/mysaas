import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import system_role from '@/system/role';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '',
			name: 'system_role',
			component: system_role
		},
		{
			path: '/system/role',
			name: 'system_role',
			component: system_role
		}
	]
});

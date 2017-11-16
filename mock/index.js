import Mock from 'mockjs';

import system from './system';

let isProduction = process.env.NODE_ENV === 'production';
Mock.mock('/success', {
	status: { code: '0', description: 'success' },
	result: {}
});
Mock.mock('/error', {
	status: { code: '111111', description: '这是错误提示' },
	result: {}
});
export default {};

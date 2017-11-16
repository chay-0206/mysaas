import Mock from 'mockjs';

Mock.mock('/v3/privilege/role/reqrolelist/', {
	status: { code: '0', description: 'success' },
	result: [
		{ roleId: -2, isDefault: 0, roleName: '总经理', brokerNum: 21 },
		{ roleId: -3, isDefault: 0, roleName: '经理', brokerNum: 21 },
		{ roleId: -4, isDefault: 0, roleName: '经纪人', brokerNum: 21 },
		{ roleId: -7, isDefault: 0, roleName: '行政', brokerNum: 13 },
		{ roleId: -8, isDefault: 0, roleName: '财务', brokerNum: 8 },
		{ roleId: 24, isDefault: 1, roleName: '分期测试勿删', brokerNum: 9 },
		{ roleId: 27, isDefault: 1, roleName: '全部权限', brokerNum: 15 },
		{ roleId: 29, isDefault: 1, roleName: '测试经纪人', brokerNum: 6 },
		{ roleId: 31, isDefault: 1, roleName: 'pxy权限测试', brokerNum: 4 },
		{ roleId: 33, isDefault: 1, roleName: '录人房源', brokerNum: 9 },
		{ roleId: 34, isDefault: 1, roleName: '财务经理', brokerNum: 4 },
		{ roleId: 36, isDefault: 1, roleName: '账单测试', brokerNum: 6 },
		{ roleId: 43, isDefault: 1, roleName: '全部数据', brokerNum: 7 },
		{ roleId: 46, isDefault: 1, roleName: '数据组', brokerNum: 5 },
		{ roleId: 47, isDefault: 1, roleName: '测试添加合同', brokerNum: 5 },
		{ roleId: 49, isDefault: 1, roleName: 'pxy权限测试157', brokerNum: 4 },
		{ roleId: 50, isDefault: 1, roleName: '1234567890', brokerNum: 5 },
		{ roleId: 54, isDefault: 1, roleName: '分期权限测试-pm', brokerNum: 5 },
		{ roleId: 56, isDefault: 1, roleName: '一二三四五六七八九十', brokerNum: 4 },
		{ roleId: 57, isDefault: 1, roleName: '权限测试', brokerNum: 5 },
		{ roleId: 59, isDefault: 1, roleName: 'promise', brokerNum: 1 },
		{ roleId: 61, isDefault: 1, roleName: 'Bobo Jin', brokerNum: 1 },
		{ roleId: 63, isDefault: 1, roleName: '客户端测试', brokerNum: 0 }
	]
});
Mock.mock('/v3/system/operationlog/reqoperationloglist/', {
	status: { code: '0', description: 'success' },
	result: {
		total: 130,
		list: [
			{
				brokerName: '蔡大大',
				roleName: '管理员',
				brokerGroupName: '',
				operationType: '创建房源',
				operationModule: '房源操作',
				operationDetail: '房源信息：朝阳公园kuqi',
				operationDate: '2017-11-16 16:23:22',
				operationTerminal: 'APP端'
			},
			{
				brokerName: '蔡大大',
				roleName: '管理员',
				brokerGroupName: '',
				operationType: '登录',
				operationModule: '账号操作',
				operationDetail: '账号名称：蔡大大',
				operationDate: '2017-11-16 16:22:18',
				operationTerminal: 'APP端'
			},
			{
				brokerName: '蔡大大',
				roleName: '管理员',
				brokerGroupName: '',
				operationType: '创建房源',
				operationModule: '房源操作',
				operationDetail: '房源信息：汇华1212',
				operationDate: '2017-11-16 16:21:50',
				operationTerminal: 'Web端'
			},
			{
				brokerName: '蔡大大',
				roleName: '管理员',
				brokerGroupName: '',
				operationType: '登录',
				operationModule: '账号操作',
				operationDetail: '账号名称：蔡大大',
				operationDate: '2017-11-16 16:19:10',
				operationTerminal: 'Web端'
			},
			{
				brokerName: '蔡大大',
				roleName: '管理员',
				brokerGroupName: '',
				operationType: '创建房源',
				operationModule: '房源操作',
				operationDetail: '房源信息：朝阳公园727',
				operationDate: '2017-11-16 16:18:08',
				operationTerminal: 'APP端'
			},
			{
				brokerName: '蔡大大',
				roleName: '管理员',
				brokerGroupName: '',
				operationType: '录入代理合同',
				operationModule: '合同操作',
				operationDetail:
					'房源信息：汇华101010;代理合同：SW201711160003653代理租金：800.00元/月 季付',
				operationDate: '2017-11-16 16:12:35',
				operationTerminal: 'APP端'
			},
			{
				brokerName: '蔡大大',
				roleName: '管理员',
				brokerGroupName: '',
				operationType: '登录',
				operationModule: '账号操作',
				operationDetail: '账号名称：蔡大大',
				operationDate: '2017-11-16 16:10:39',
				operationTerminal: 'Web端'
			},
			{
				brokerName: '蔡大大',
				roleName: '管理员',
				brokerGroupName: '',
				operationType: '登录',
				operationModule: '账号操作',
				operationDetail: '账号名称：蔡大大',
				operationDate: '2017-11-16 16:02:53',
				operationTerminal: 'Web端'
			},
			{
				brokerName: '蔡大大',
				roleName: '管理员',
				brokerGroupName: '',
				operationType: '登录',
				operationModule: '账号操作',
				operationDetail: '账号名称：蔡大大',
				operationDate: '2017-11-16 16:02:03',
				operationTerminal: 'Web端'
			},
			{
				brokerName: '蔡大大',
				roleName: '管理员',
				brokerGroupName: '',
				operationType: '添加账单',
				operationModule: '财务操作',
				operationDetail:
					'代理合同编号：null;账单编号：SZ20171116155027164590;金额：99.00元',
				operationDate: '2017-11-16 15:50:27',
				operationTerminal: 'APP端'
			}
		]
	}
});
export default {};

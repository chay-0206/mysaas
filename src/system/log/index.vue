<template>
    <div>
        <div class="my-title">操作日志</div>
        <table>
            <thead>
                <tr>
                    <th class="table-width-1">分组</th>
                    <th class="table-width-2">操作</th>
                    <th class="table-width-3">操作详情</th>
                    <th class="table-width-3">用户</th>
                    <th class="table-width-3">用户角色</th>
                    <th class="table-width-3">门店</th>
                    <th class="table-width-3">操作时间</th>
                    <th class="table-width-3">操作终端</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data">
                    <td>
                        <div class="info-omit" :title="item.operationModule || '--'">{{item.operationModule || '--'}}</div>
                    </td>
                    <td>
                        <div class="info-omit" :title="item.operationType || '--'">{{item.operationType || '--'}}</div>
                    </td>
                    <td>
                        <div class="info-omit" :title="item.operationDetail || '--'">{{item.operationDetail || '--'}}</div>
                    </td>
                    <td>
                        <div class="info-omit" :title="item.brokerName || '--'">{{item.brokerName || '--'}}</div>
                    </td>
                    <td>
                        <div class="info-omit" :title="item.roleName || '--'">{{item.roleName || '--'}}</div>
                    </td>
                    <td>
                        <div class="info-omit" :title="item.brokerGroupName || '--'">{{item.brokerGroupName || '--'}}</div>
                    </td>
                    <td>
                        <div class="info-omit" :title="item.operationDate || '--'">{{item.operationDate || '--'}}</div>
                    </td>
                    <td>
                        <div class="info-omit" :title="item.operationTerminal || '--'">{{item.operationTerminal || '--'}}</div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="page-container">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="page.page" :page-size.sync="page.size" layout="prev, pager, next, jumper" :total.sync="page.total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
    	name: 'system-role',
    	data() {
    		return {
    			data: [],
    			page: {
    				page: 1,
    				size: 10,
    				total: 1
    			}
    		};
    	},
    	methods: {
    		handleSizeChange: function() {},
    		handleCurrentChange: function() {}
    	},
    	created() {
    		this.$axios
    			.get(`/v3/system/operationlog/reqoperationloglist/`)
    			.then(res => {
    				this.data = res.data.result.list;
    				this.page.total = res.data.result.total;
    			});
    	}
    };
</script>

<style lang="less">
    .page-container {
    	display: flex;
    	justify-content: flex-end;
    	margin-top: 20px;
    }
</style>

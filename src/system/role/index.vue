<template>
    <div>
        <div class="my-title" style="margin-bottom:20px;">角色列表</div>
        <table>
            <thead>
                <tr>
                    <th class="table-width-1">角色名称</th>
                    <th class="table-width-2">关联用户数</th>
                    <th class="table-width-3">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data">
                    <td>{{item.roleName}}</td>
                    <td>{{item.brokerNum}}</td>
                    <td>
                        <el-button icon="el-icon-share" size="mini" v-if="item.isDefault===0">查看</el-button>
                        <div v-else>
                            <el-button icon="el-icon-edit" size="mini">编辑</el-button>
                            <el-button icon="el-icon-warning" size="mini" @click="deleteData(item.roleId)">删除</el-button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
    	name: 'system-role',
    	data() {
    		return {
    			data: []
    		};
    	},
    	methods: {
    		deleteData: function(id) {
    			this.data.remove(id, 'roleId');
    		}
    	},
    	created() {
    		this.$axios.get(`/v3/privilege/role/reqrolelist/`).then(res => {
    			this.data = res.data.result;
    		});
    	}
    };
</script>

<style lang="less">
    table {
    	width: inherit;
    }
    .table-width-1 {
    	width: 270px;
    }
    .table-width-2 {
    	width: 140px;
    }
    .table-width-3 {
    	width: 380px;
    }
</style>

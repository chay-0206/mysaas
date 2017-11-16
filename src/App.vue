<template>
    <div id="app">
        <aside>
            <el-radio-group v-model="isCollapse" v-on:change="change" style="margin-bottom: 20px;position: absolute;right:-55px;z-index:1000;">
                <el-radio-button border="false" :label="false" v-if="show_btn">
                    <i class="el-icon-tickets"></i>
                </el-radio-button>
                <el-radio-button border="false" :label="true" v-else>
                    <i class="el-icon-tickets"></i>
                </el-radio-button>
            </el-radio-group>
            <el-menu class="el-menu-vertical-demo" unique-opened="" background-color="#454e53" text-color="#fff" active-text-color="#1ab9a6" :router="true" :default-active="activeIndex" :collapse="isCollapse" style="height:100%;">
                <div class="hfq-logo">
                </div>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-document nav-section"></i>
                        <span slot="title">房源</span>
                    </template>
                    <el-menu-item index="1-1">分散式房源</el-menu-item>
                    <el-menu-item index="1-2">集中式房源</el-menu-item>
                    <el-menu-item index="1-3">房源发布</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu nav-section"></i>
                        <span slot="title">财务</span>
                    </template>
                    <el-menu-item index="2-1">账单管理</el-menu-item>
                    <el-menu-item index="2-2">交易流水</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location nav-section"></i>
                        <span slot="title">报表</span>
                    </template>
                    <el-menu-item index="3-1">空置成本报表</el-menu-item>
                    <el-menu-item index="3-2">运营报表</el-menu-item>
                    <el-menu-item index="3-3">业绩报表</el-menu-item>
                    <el-menu-item index="3-4">财务报表</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-setting nav-section"></i>
                        <span slot="title">系统</span>
                    </template>
                    <el-menu-item index="4-1">账号管理</el-menu-item>
                    <el-menu-item index="/system/role">角色管理</el-menu-item>
                    <el-menu-item index="4-3">系统配置</el-menu-item>
                    <el-menu-item index="/system/log">操作日志</el-menu-item>
                </el-submenu>
            </el-menu>
        </aside>
        <div class="right">
            <header></header>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
    import 'element-ui/lib/theme-chalk/index.css';
    import 'element-ui/lib/index.js';
    export default {
    	name: 'app',
    	data() {
    		return {
    			show_btn: true,
    			isCollapse: true,
    			activeIndex: ''
    		};
    	},
    	methods: {
    		change(value) {
    			this.show_btn = !this.show_btn;
    		}
    	},
    	created() {
    		if (!this.$route.meta.alone) {
    			this.activeIndex = this.$route.path;
    		}
    	}
    };
</script>

<style lang="less">
    @import './assets/css/main.less';
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    	width: 200px;
    	min-height: 400px;
    }
    #app {
    	width: 100%;
    	height: 100%;
    	display: flex;
    }
    // 侧边栏
    aside {
    	background: #454e53;
    	height: 100%;
    	position: relative;
    }
    aside .el-radio-button__inner {
    	color: rgb(69, 78, 83) !important;
    	border: 0 !important;
    }
    aside .el-radio-button__inner:hover {
    	color: #000 !important;
    }
    .hfq-logo {
    	width: 64px;
    	height: 40px;
    	background: url(~assets/img/hfq_logo.png) no-repeat;
    	background-size: 100%;
    	margin: 0 auto;
    }
    .right {
    	width: 100%;
    	height: 100%;
    	background: #e8eaec;
    	display: flex;
    	flex-direction: column;
    }
    header {
    	height: 40px;
    	width: 100%;
    	background: #fff;
    	flex-shrink: 0;
    }
    main {
    	width: 100%;
    	height: 100%;
    	margin-top: 10px;
    	background: #fff;
    	padding: 20px;
    	overflow: auto;
    	position: relative;
    }
</style>


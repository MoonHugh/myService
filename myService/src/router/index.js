import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			// 首页
			path: '/',
			name: 'default',
			component: resolve => require(['../page/index.vue'], resolve)
		},
		{
			// 首页
			path: '/index',
			name: 'index',
			component: resolve => require(['../page/index.vue'], resolve)
		},
		{
			// 服务列表
			path: '/service',
			name: 'service',
			component: resolve => require(['../page/service.vue'], resolve)
		},
		{
			// 车主服务详情
			path: '/orderdetails',
			name: 'orderdetails',
			component: resolve => require(['../page/orderdetails.vue'], resolve)
		},
		{
			// 历史服务
			path: '/historyService',
			name: 'historyService',
			component: resolve => require(['../page/historyService.vue'], resolve)
		},
		{
			// 历史服务详情
			path: '/historyServiceDetails',
			name: 'historyServiceDetails',
			component: resolve => require(['../page/historyServiceDetails.vue'], resolve)
		}
	]
})

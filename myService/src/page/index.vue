<template>
	<div class="index_main">
		<!--顶部导航-->
		<div class="top_title">
			<div class="top_word">我的服务进度</div>
		</div>
		<!--正文-->
		<div class="index_content">
			<ul class="firstList">
				<li>
					<router-link class="top_con fix" :to='{path: "service", query: {id: "01"}}'>
						<div class="firstLidiv fl fix">理赔进度</div>
						<img class="firstLiimg fr" src="static/image/06.png">
						<p>点击查看</p>
					</router-link>
				</li>
				<li>
					<router-link class="top_con fix" :to='{path: "service", query: {id: "02"}}'>
						<div class="firstLidiv fl fix">车主服务进度</div>
						<img class="firstLiimg fr" src="static/image/07.png">
						<p>点击查看</p>
					</router-link>
				</li>
				<!-- <li>
					<router-link class="top_con fix" :to='{path: "service", query: {id: "03"}}'>
						<div class="firstLidiv fl fix">批改服务进度</div>
						<img class="firstLiimg fr" src="">
						<p>点击查看</p>
					</router-link>
				</li> -->
			</ul>
			<ul class="secondList">
				<li>
					<router-link to="historyService" class="secondLitop fix">
						<p>历史服务进度</p>
						<img class="secondLiimg fr" src="static/image/triangle.png">
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
export default{
	name: 'app',
	data(){
		return{
		}
	},
	beforeMount(){
		this.$nextTick(function(){
			this.getData();
		});
	},
	methods:{
		getData:function(){
			let _this = this;
		},
	}
}
</script>
<style lang="scss">
.index_main{
	.top_title{
		width: 100%; height: 1rem; background: #006cb7; position: fixed; left: 0; top: 0; z-index: 99;
		.top_word{ line-height: 1rem; text-align: center; font-size: 0.32rem; color: #fff; }
	}
	.index_content{
		padding-top: 1rem;
		.firstList{
			padding: 0.2rem;
			li+li{ margin-top: 0.2rem; }
			.top_con{ display: block; width: 100%; height: 1.6rem; border: 1px solid #cbcbcb; position: relative; }
			.firstLidiv{ padding-left: 0.3rem; width: 5rem; height: 1.6rem; line-height: 1.6rem; font-size: 0.26rem; font-weight: bold; color: #000; }
			.firstLiimg{ width: 1.6rem; height: 1.6rem; background: #006cb7; }
			p{ width: 1.6rem; height: 1.6rem; line-height: 1.6rem; text-align: center; font-size: 0.28rem; font-weight: bold; color: #fff; position: absolute; right: 0; top: 0; }
		}
		.secondList{
			margin-top: 0.2rem; padding-bottom: 0.6rem; width: 100%; border-top: 1px solid #cbcbcb;
			li{ border-bottom: 1px solid #cbcbcb; }
			.secondLitop{
				height: 0.8rem; line-height: 0.8rem;
				p{ float: left; text-indent: 0.2rem; font-size: 0.24rem; color: #797979; }
				img{ float: right; margin: 0.25rem 0.2rem 0 0; width: 0.3rem; height: 0.3rem; }
			}
		}
	}
}
</style>
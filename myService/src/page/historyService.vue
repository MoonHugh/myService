<template>
	<div class="historyService_main">
		<!--顶部导航-->
		<div class="top_title">
			<router-link to="index">
				<img class="top_back" src="static/image/back.png">
			</router-link>
			<div class="top_word">我的服务进度</div>
		</div>
		<!--正文-->
		<div class="historyService_content">
			<ul class="firstList">
				<li>
					<router-link class="top_con fix" :to='{path: "historyServiceDetails", query: {id: "01"}}'>
						<div class="firstLidiv fl fix">理赔进度</div>
						<img class="firstLiimg fr" src="static/image/04.png">
						<p>历史进度</p>
					</router-link>
				</li>
				<li>
					<router-link class="top_con fix" :to='{path: "historyServiceDetails", query: {id: "02"}}'>
						<div class="firstLidiv fl fix">车主服务进度</div>
						<img class="firstLiimg fr" src="static/image/05.png">
						<p>历史进度</p>
					</router-link>
				</li>
				<!-- <li>
					<router-link class="top_con fix" :to='{path: "historyServiceDetails", query: {id: "03"}}'>
						<div class="firstLidiv fl fix">批改服务进度</div>
						<img class="firstLiimg fr" src="">
						<p>历史进度</p>
					</router-link>
				</li> -->
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
.historyService_main{
	.top_title{
		width: 100%; height: 1rem; background: #006cb7; position: fixed; left: 0; top: 0; z-index: 99;
		.top_back{ width: 0.66rem; height: 0.66rem; position: absolute; left: 0.24rem; top: 0.17rem; }
		.top_word{ line-height: 1rem; text-align: center; font-size: 0.32rem; color: #fff; }
	}
	.historyService_content{
		padding-top: 1rem;
		.firstList{
			padding: 0.2rem;
			li+li{ margin-top: 0.2rem; }
			.top_con{ display: block; width: 100%; height: 1.6rem; border: 1px solid #cbcbcb; position: relative; }
			.firstLidiv{ padding-left: 0.3rem; width: 5rem; height: 1.6rem; line-height: 1.6rem; font-size: 0.26rem; font-weight: bold; color: #000; }
			.firstLiimg{ width: 1.6rem; height: 1.6rem; background: #585858; }
			p{ width: 1.6rem; height: 1.6rem; line-height: 1.6rem; text-align: center; font-size: 0.28rem; font-weight: bold; color: #fff; position: absolute; right: 0; top: 0; }
		}
	}
}
</style>
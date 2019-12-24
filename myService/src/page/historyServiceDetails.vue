<template>
	<div class="historyServiceDetails_main">
		<!--顶部导航-->
		<div class="top_title">
			<router-link to="historyService">
				<img class="top_back" src="static/image/back.png">
			</router-link>
			<div class="top_word">我的服务进度</div>
		</div>
		<!--正文-->
		<div class="historyServiceDetails_content">
			<div class="order" v-if="id == '01'">
				<div class="title fix">
					<img class="titleimg fl" src="static/image/title01.png">
					<p class="titlep fl">历史理赔</p>
				</div>
				<div class="rows fix" v-for="item in plate1">
					<div class="con_bigRow fix">
						<div class="con_littitle fl">保险名称：</div>
						<div class="con_title fl">{{item.RISKNAME}}</div>
						<div class="ckdd">查看详情</div>
					</div>
					<div class="con_littleRow">
						<div class="con_littitle fl">报案/立案时间：</div>
						<div class="con_title fl">{{item.reportTime}}</div>
					</div>
				</div>
				<div class="rows fix" v-for="item in plate2">
					<div class="con_bigRow fix">
						<div class="con_littitle fl">保险名称：</div>
						<div class="con_title fl">{{item.riskName}}</div>
						<div class="ckdd">查看详情</div>
					</div>
					<div class="con_littleRow">
						<div class="con_littitle fl">报案/立案时间：</div>
						<div class="con_title fl">{{item.openDate}}</div>
					</div>
					<div class="con_littleRow">
						<div class="con_littitle fl">最新进度：</div>
						<div class="con_title fl blue">{{item.recentStatus}}</div>
					</div>
				</div>
			</div>
			<div class="order" v-if="id == '02'">
				<div class="title fix">
					<img class="titleimg fl" src="static/image/title02.png">
					<p class="titlep fl">历史车主服务进度</p>
				</div>
				<div class="rows fix" v-for="item in plate3">
					<div class="con_bigRow fix">
						<div class="con_littitle fl">服务项目：</div>
						<div class="con_title fl">{{item.rescueitem}}</div>
						<div class="ckdd">查看详情</div>
					</div>
					<div class="con_littleRow">
						<div class="con_littitle fl">申请时间：</div>
						<div class="con_title fl">{{item.createdtime}}</div>
					</div>
					<div class="con_littleRow">
						<div class="con_littitle fl">最新进度：</div>
						<div class="con_title fl blue">{{item.providerstate}}</div>
					</div>
				</div>
			</div>
			<!-- <div class="order" v-if="id == '03'">
				<div class="title fix">
					<img class="titleimg fl" src="static/image/title01.png">
					<p class="titlep fl">批改服务进度</p>
				</div>
				<div class="rows fix">
					<div class="con_bigRow fix">
						<div class="con_littitle fl">服务项目：</div>
						<div class="con_title fl"></div>
						<div class="ckdd">查看详情</div>
					</div>
					<div class="con_littleRow">
						<div class="con_littitle fl">申请时间：</div>
						<div class="con_title fl"></div>
					</div>
					<div class="con_littleRow">
						<div class="con_littitle fl">最新进度：</div>
						<div class="con_title fl blue"></div>
					</div>
				</div>
			</div> -->
			<div v-show="hint1" class="hint">没有历史理赔！</div>
			<div v-show="hint2" class="hint">没有历史车主服务进度！</div>
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
export default{
	name: 'app',
	data(){
		return{
			id: '',
			rreturn1: '',
			rreturn2: '',
			plate1: '',
			plate2: '',
			plate3: '',
			hint1: '',
			hint2: '',
		}
	},
	beforeMount(){
		this.$nextTick(function(){
			this.getData();
		});
	},
	created(){
		this.id = this.$route.query.id;
	},
	methods:{
		getData:function(){
			let _this = this;
			if(this.id == '01'){
				// 初始接口，获取理赔历史进度
				this.$http.post(Util.ajaxPath.devProductUrl+'hyClaimService',{emulateJSON : true}).then(function (res){
					_this.rreturn1 = res.body;
					if(_this.rreturn1.succ == true){
						if(_this.rreturn1.data.carService == '' && _this.rreturn1.data.noCarService == ''){
							this.hint1 = true;
						}else{
							if(_this.rreturn1.data.carService !== ''){
								_this.plate1 = _this.rreturn1.data.carService;
							};
							if(_this.rreturn1.data.noCarService !== ''){
								_this.plate2 = _this.rreturn1.data.noCarService.claim;
							};
						}
					};
				});
			}else if(this.id == '02'){
				// 初始接口，获取理车主服务历史进度
				this.$http.post(Util.ajaxPath.devProductUrl+'hyCarService',{emulateJSON : true}).then(function (res){
					_this.rreturn2 = res.body;
					if(_this.rreturn2.succ == true){
						if(_this.rreturn2.data.carServ !== ''){
							_this.plate3 = _this.rreturn2.data.carServ;
						}else{
							this.hint2 = true;
						}
					};
				});
			}
		},
	}
}
</script>
<style lang="scss">
.historyServiceDetails_main{
	.top_title{
		width: 100%; height: 1rem; background: #006cb7; position: fixed; left: 0; top: 0; z-index: 99;
		.top_back{ width: 0.66rem; height: 0.66rem; position: absolute; left: 0.24rem; top: 0.17rem; }
		.top_word{ line-height: 1rem; text-align: center; font-size: 0.32rem; color: #fff; }
	}
	.historyServiceDetails_content{
		padding-top: 1rem;
		.order{ padding-top: 0.4rem; }
		.title{ margin: 0 auto; width: 6.76rem; height: 0.8rem; background: #727070; border-radius: 0.16rem; }
		.titleimg{ display: block; padding: 0.2rem; width: 0.4rem; height: 0.4rem; }
		.titlep{ height: 0.8rem; line-height: 0.82rem; font-size: 0.28rem; color: #fff; }
		.rows{ padding-top: 0.28rem; }
		.con_bigRow{
			height: 0.6rem; border-left: 0.2rem solid #727070; position: relative;
			.con_littitle{ height: 0.6rem; line-height: 0.6rem; text-indent: 0.4rem; font-size: 0.28rem; color: #000; }
			.con_title{ height: 0.6rem; line-height: 0.6rem; font-size: 0.28rem; color: #000; }
			.ckdd{ display: block; width: 1.88rem; height: 0.48rem; line-height: 0.5rem; text-align: center; font-size: 0.3rem; color: #fff; background: #727070; border-radius: 0.1rem; position: absolute; left: 5rem; top: 0.04rem; }
		}
		.con_littleRow{
			 height: 0.6rem; margin: 0 0.2rem; position: relative;
			.con_littitle{ height: 0.6rem; line-height: 0.6rem; text-indent: 0.4rem; font-size: 0.28rem; color: #000; }
			.con_title{ height: 0.6rem; line-height: 0.6rem; font-size: 0.28rem; color: #000; }
			.blue{ color: #006cb7; }
		}
		.con_littleRow:last-child{ padding-bottom: 0.28rem; border-bottom: 1px dashed #adadad; }
		.hint{ padding: 0.2rem; height: 1.6rem; line-height: 1.6rem; text-align: center; font-size: 0.26rem; color: #000; }
	}
}
</style>
angular.module('ngConstants',[]).factory("constants",function($http, $q){
	return {
		getRoot: function(){
			var t = {};
			//测试外网地址
			 var url = "http://182.18.19.153:8010/hwpmMB";
			//王冬冬
//			var url = "http://192.168.210.83:8888/hwpmMB";
			//登录
			t.login = url + '/login.OK?';
			//获取存入金额
			t.getInList = url + '/getInList.OK?';
			//获取首页数据
			t.homeData = url + '/queryNum.OK?';
			//获取存款列表
			t.deposit = url + '/getInList.OK?';
			//获取消费列表
			t.consumeList = url + '/getOutList.OK?';
			//获取模板列表
			t.getTmpList = url + '/getTmpList.OK?';
			//获取优惠券列表
			t.getCouponList = url + '/getConponList.OK?';
			//获取存入金额
			t.getNumIn = url + '/getNumIn.OK?';
			//查询用户信息
			t.getPersonInfo = url + '/getUserInfo.OK?';
			//修改用户信息
			t.editUser = url + '/EditUser.OK?';
			//添加银行卡信息
			t.addBankCard = url + '/editBankCard.OK?';
			//查询银行卡信息
			t.searchCard = url + '/getBankCards.OK?';
			//充值
			t.charge = url + '/chargeMoney.OK?';
			//退出
			t.exit = url + '/logOut.OK?';
			return t;
		}
	}
});

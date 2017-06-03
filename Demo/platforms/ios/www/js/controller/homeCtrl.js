myApp.controller("tabsCtrl", function($scope, appMain, $state, $ionicSlideBoxDelegate, $rootScope) {
	// 1	调度计划
	// 2	车辆管理
	// 3	合同查询
	// 4	统计分析
	// 5	消息提醒
	// 6	司机首页
	$scope.setTabs=function () {
		$scope.dispatchmanage = false;
		$scope.truckmanage = false;
		$scope.contractmanage = false;
		$scope.purchasemanage = false;
		$scope.display_app=0;
		var buttList = appMain.getLocal("buttList");
		for (var i = 0; i < buttList.length; i++) {
			if (buttList[i] == '1-app') { //调度计划
				$scope.dispatchmanage = true;
				$scope.display_dispatching=1;
			} else if (buttList[i] == '2-app') { //车辆管理
				$scope.truckmanage = true;
				$scope.display_vehicle=2;
			} else if (buttList[i] == '3-app') { //合同查询
				$scope.contractmanage = true;
				$scope.display_contract=3;
			} else if (buttList[i] == '4-app') { //统计分析
				$scope.purchasemanage = true;
				$scope.display_purchase=4;
			}

		}

	}
    $scope.setTabs=function () {
        $scope.menu = false;
        $scope.person = false;
        $scope.set = false;
        $scope.display_app=0;
        var buttList = ['1-app','2-app','3-app'];
        for (var i = 0; i < buttList.length; i++) {
            if (buttList[i] == '1-app') { //调度计划
                $scope.menu = true;
                $scope.display_dispatching=1;
            } else if (buttList[i] == '2-app') { //车辆管理
                $scope.person = true;
                $scope.display_vehicle=2;
            } else if (buttList[i] == '3-app') { //合同查询
                $scope.set = true;
                $scope.display_contract=3;
            }

        }

    }
	$scope.setTabs();
	$scope.$on('$ionicView.beforeEnter', function(){
		// window.xzNavigationTool && $scope.setTitle();
		$scope.setTabs();
		// $scope.purchaseList();
	});
})
	.controller("homeCtrl", function(appMain,$scope, interface, $timeout, $state, $rootScope,$filter) {
	// for(var i=0;i<1;i++){
	// 	window.location.reload();
	// }
	var userInfo= appMain.getLocal("userInfo");
	$scope.company = userInfo.company;
	var token = userInfo.token;
	var rongToken = userInfo.rongToken;
	//获取消息数量
	$scope.msgShow=false;
	$scope.msgNum='';
	//调用原生融云插件
	var  timeMsgNum = function () {
		console.info("timeMsgNum");
		// document.addEventListener('deviceready', function () {//获取设备监听
			numberOfMsg.numberOfMsg(function(msg){//连接
				if(msg!=0){
					$timeout(function (data) {
						$scope.msgShow=true;
						$scope.msgNum = msg;
					},1000);
				}
			}, function(msg){
				$scope.msgNum = '';
				console.info(msg);
			});
		// });
	}
	var t1 = window.setInterval(timeMsgNum,5000);
	// window.clearInterval(t1);
	//确定退出
	$scope.confirm = function() {
		//调用原生融云插件
		// document.addEventListener('deviceready', function () {//获取设备监听
		rongCloudPlugin.close(function(msg){//连接
			$scope.showToast("已退出");
			// alert('退出成功');
			// console.info("退出成功");
		}, function(msg){
			// console.info("退出失败");
			// alert('退出失败');
		});
		// });
		$timeout(function (data) {
			window.clearInterval(t1);
			window.clearInterval(t1);
			appMain.setLocal({
				"key":"autoLogin",
				"data":false
			});
			// localStorage.clear();
			window.location.href =window.location.pathname;//刷新页面
			//window.location.reload();
			//$state.go("login");
			// $state.go("login", {}, { reload: true });
		});
	}
	//修改密码
	$scope.resetPwd = function() {
		$(".resetPwdBgc").css("display", "block");
	}
	//确定修改密码
	$scope.pwd={
		oldPwd:"",
		newPwd:""
	}
	$scope.saveResetPwd = function() {
		if($scope.pwd.oldPwd==''||$scope.pwd.newPwd==''){
			$scope.showToast("请正确填写原密码和新密码");
			return;
		}
		var params={
			account:userInfo.account,
			oldPwd:$scope.pwd.oldPwd,
			newPwd:$scope.pwd.newPwd
		}
		interface.resetPwd(params).then(function(response) {
			$scope.nltipH = 0;
			if(response.code == 0){
				window.clearInterval(t1);
				window.clearInterval(t1);
				appMain.setLocal({
					"key":"autoLogin",
					"data":false
				});
				$(".resetPwdBgc").css("display", "none");
				$scope.pwd.oldPwd="";
				$scope.pwd.newPwd="";
				$scope.showToast(response.msg);
				$state.go("login");
				return;
			}
			if (response.code == 1) {
				$scope.showToast(response.msg);
				$timeout(function (data) {
					window.clearInterval(t1);
					window.clearInterval(t1);
					appMain.setLocal({
						"key":"autoLogin",
						"data":false
					});
					$(".resetPwdBgc").css("display", "none");
					$scope.pwd.oldPwd="";
					$scope.pwd.newPwd="";
					$state.go("login");
					return;
				});
			} else {
				$scope.showError();
			}
		});
	}
	//关闭重置密码按钮
	$scope.closeResetPwd = function() {
		$(".resetPwdBgc").css("display", "none");
	}
	//取消退出
	$scope.cancel = function() {
		$(".exitBgc").css("display", "none");
	}
	$scope.cancel1 = function() {
		$(".resetPwdBgc").css("display", "none");
	}
	$scope.exit = function() {
		$(".exitBgc").css("display", "block");
	}
	var dateTime=new Date();
    var dd1=dateTime.getTime();
    var t1 = $filter('date')(dd1,'yyyy-MM-dd');
    var dd=dateTime.getTime()+24*60*60*1000;
    var t = $filter('date')(dd,'yyyy-MM-dd');
    $scope.date1=t1;
    $scope.date2=t;
	var params = {
		token: userInfo.token,
		purchaserId: userInfo.purchaserId
	}
	interface.plantimesdetail(params).then(function(data) {
		$scope.hh=data.total;
		$scope.hh1=data.finished;
		$scope.hh2=data.tomorrow;
	})

	//下拉刷新
	$scope.pageNum = 0;
	$scope.count = 10;
	$scope.showScrollH = false;
	$scope.transportLists = [];
	$scope.doRefreshStateList = function(n) {
			if (!n) {
				$scope.nltipH = 0;
			}
			$scope.showScrollH = false;
			$scope.pageNum = 0;
			var params = {
				purchaserId: userInfo.purchaserId,
				pageNum: 0,
				pageSize: 5,
				token:token
			}
			interface.transtruckstatus(params).then(function(response) {
				$scope.nltipH = 0;
				if(response.code == 0){
					$state.go("login");
					$scope.showToast(response.msg);
					return;
				}
				if (response.code == 1) {
					var list = response.trucks;
					if (list && list.length > 0) {
						$scope.transportLists = list;
						if (n != 2) {
							$scope.$broadcast("scroll.refreshComplete");
						}
						if (list.length > $scope.count - 1) {
							$scope.showScrollH = true;
							$scope.$broadcast("scroll.infiniteScrollComplete");
						} else {
							$scope.nltipH = 1;
							//$scope.showToast("没有更多内容");
						}
					} else {
						$scope.nltipH = 1;
						//$scope.showToast("没有更多内容");
						$scope.$broadcast('scroll.refreshComplete');
					}

				} else {
					$scope.showError();
				}
			})
		},
		//加载
		$scope.loadMoreStateList = function() {
			$scope.pageNum++;
			// console.log($scope.pageNum)
			var params = {
				purchaserId: userInfo.purchaserId,
				pageNum: $scope.pageNum,
				pageSize: $scope.count,
				token:token
			}
			interface.transportList(params).then(function(response) {
				if(response.code == 0){
					$state.go("login");
					$scope.showToast(response.msg);
					return;
				}
				if(response.code == 1){
					var list = response.trucks;
					if (response.trucks && list instanceof Array) {
						if (list.length < $scope.count || list.length < 1) {
							$scope.showScrollH = false;
							$scope.nltipH = 1;
						}
						$scope.transportLists = $scope.transportLists.concat(list);
						console.log("加载更多approvelist--" + list.length)
					} else {
						$scope.showScrollH = false;
						$scope.showError();
					}
					$scope.$broadcast("scroll.infiniteScrollComplete")
				}else{
					$scope.showError();
				}

			})
		},

	$scope.msgList = function() {
		//清楚消息数量
		//调用原生融云插件
		// document.addEventListener('deviceready', function () {//获取设备监听
			numberOfMsg.clear(function(msg){//连接
				$scope.msgShow=false;
				$scope.msgNum = '';
			}, function(msg){
				console.info(msg);
			},["1"]);
		// });
		$state.go("messList");
	}
	$scope.showMe = function() {
		$state.go("meInfo");
	}

	$scope.nltipH = 2;
	$scope.doRefreshStateList(2);
	// 监听是否跳转到其他页面
	$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
		// event.preventDefault();
		if(fromState.name != "app.home" && fromState.name != "app.dispatching" &&fromState.name != "app.vehicle" &&
			fromState.name != "app.contract" && fromState.name != "app.purchase"){
			window.clearInterval(t1);
		}
		console.info(fromState.name);
	});
})
	.controller("msgListCtrl", function(interface, appMain,$rootScope, $scope, $state, $rootScope) {
	$scope.pageNo = 0;
	$scope.pageSize = 20;
	$scope.showScroll = false;
	$scope.messList = [];
	var userInfo = appMain.getLocal("userInfo");
	var token = userInfo.token;
	$scope.doRefreshMsgList = function(n) {

			if (!n) {
				$scope.nltipM = 0;
			}
			$scope.showScroll = false;
			$scope.pageNo = 0;
			var params = {
				receiverid: userInfo.id,
				pageNum: 0,
				count: $scope.pageSize,
				token:token
			}
			interface.msgList(params).then(function(data) {
				if(data.code == 0){
					$state.go("login");
					$scope.showToast(response.msg);
					return;
				}
				$scope.nltipM = 0;
				if (data.code ==1) {
					var list = data.messageHistory;
					if (list && list.length > 0) {
						$scope.messList = list;
						if (n != 2) {
							$scope.$broadcast("scroll.refreshComplete");
						}

						if (list.length > $scope.pageSize - 1) {
							$scope.showScroll = true;
							$scope.$broadcast("scroll.infiniteScrollComplete");
						} else {
							$scope.nltipM = 1;
						}
					} else {
						$scope.nltipM = 1;
						$scope.$broadcast("scroll.refreshComplete");
					}
				} else {
					$scope.showError();
				}
			})
		},
		// 下拉刷新
		$scope.loadMoreMsgList = function() {
			// if(1 == $scope.pageNo){
			//   console.log(1111)
			//   $scope.$broadcast("scroll.infiniteScrollComplete") 
			// }else{
			// console.log(2222)
			$scope.pageNo++;
			//$scope.showLoad();
			var params = {
				receiverid: userInfo.id,
				pageNum: $scope.pageNo,
				count: $scope.pageSize,
				token:token
			}
			interface.msgList(params).then(function(data) {
				if(data.code == 0){
					$state.go("login");
					$scope.showToast(response.msg);
					return;
				}
				if(data.code == 1){
					var list = data.messageHistory;
					if (data.messageHistory && list instanceof Array) {
						if (list.length < $scope.pageSize || list.length < 1) {
							$scope.showScroll = false;
							$scope.nltipM = 1;
						}
						$scope.messList = $scope.messList.concat(list);
						console.log("加载更多approvelist--" + list.length)
					} else {
						$scope.showScroll = false;
						$scope.showError();

					}
					$scope.$broadcast("scroll.infiniteScrollComplete");
				}else{
					$scope.showError();
				}
			});
		},

		$scope.nltipM = 2;
	$scope.doRefreshMsgList(2);

	$scope.msgDetail = function(msg) {
		// console.info(msg);
		$state.go("messDetail", {
			msg: JSON.stringify(msg)
		})
	}
	// $scope.toClose = function() {
	// 	console.info($state.current.name);
	// 	if ($state.current.name.indexOf("messList") > -1) {
	// 		$state.go("app.home");
	// 		// $ionicHistory.goBack();
	// 	}
	// }
}).controller("msgDetailCtrl", function(appMain,$ionicHistory, interface, $scope, $state, $stateParams, $rootScope) {
	//页面回填
	// console.info(JSON.parse($stateParams.msg));
	var userInfo = appMain.getLocal("userInfo");
	var token = userInfo.token;
	var msg = JSON.parse($stateParams.msg);
	$scope.message = {
		title: "",
		date: "",
		content: ""
	}
	$scope.message.title = msg.title;
	$scope.message.date = msg.date;
	$scope.message.content = msg.content;
	var msgId = msg.id;
	var status = msg.status;
	var reFlag=0;
	if(status==0){//未读
		var params={
			id:msgId,
			token:token
		}
		interface.updateStatus(params).then(function (response) {
			if(response.code==0){
				$state.go("login");
				$scope.showToast(response.msg);
				return;
			}
			if(response.code==1){
				reFlag=1;//已读
			}
		});
	}
	$scope.refresh = function() {
		
	}
	// $scope.toClose = function() {
	// 	console.info($state.current.name);
	// 	if ($state.current.name.indexOf("messDetail") > -1) {
	// 		$state.go("messList");
	// 		// $ionicHistory.goBack();
	// 	}
	// }

});
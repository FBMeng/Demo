myApp.controller("tabsCtrl", function($scope, appMain, $state, $ionicSlideBoxDelegate, $rootScope) {
    // 1	付款
    // 2	个人信息
    // 3	设置
    console.info('tabsctrl')
    $scope.setTabs=function () {
        $scope.menu = false;
        $scope.person = false;
        $scope.set = false;
        $scope.display_app=0;
        var buttList = ['1-app','2-app','3-app'];
        for (var i = 0; i < buttList.length; i++) {
            if (buttList[i] == '1-app') { //付款
                $scope.menu = true;
                $scope.display_dispatching=1;
            } else if (buttList[i] == '2-app') { //个人
                $scope.person = true;
                $scope.display_vehicle=2;
            } else if (buttList[i] == '3-app') { //设置
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
})/**
 * Created by Administrator on 2017/5/15.
 */
.controller("homepageCtrl", function(appMain,$scope, interface, $timeout, $state, $rootScope,$filter) {
    var info = appMain.getLocal('userInfo');
    $scope.userName = info.userName;
    $scope.homeData = {
        money : '',
        coupon : '',
        card : ''
    };
    console.info(info)
    $scope.openWallet = function () {
        $state.go('wallettabs.wallet');
    }
    $scope.openCoupon = function () {
        $state.go('coupon');
    }
    $scope.openMyCard = function () {
        $state.go('mycard');
    }
    //获取首页钱包、优惠券、银行卡数量
    $scope.getHomeData = function () {
      var params = {
          userId : info.userId
      }
      interface.homeData(params).then(function (response) {
          if (response.data.flag == 0){
              $scope.homeData.money = response.data.IN_MONEY;
              $scope.homeData.coupon = response.data.IN_COUPON_NUM;
              $scope.homeData.card = response.data.CARD_NUM;
          }
      })
    }
    $scope.getHomeData();
})
    .controller("walletTabsCtrl", function($scope, appMain, $state, $ionicSlideBoxDelegate, $rootScope) {
        console.info('walletTabsCtrl')
        // 1	使用明细
        // 2	充值记录
        $scope.setWalletTabs=function () {
            $scope.wallet = false;
            $scope.detail = false;
            $scope.display_app=0;
            var buttList = ['1-app','2-app'];
            for (var i = 0; i < buttList.length; i++) {
                if (buttList[i] == '1-app') { //使用明细
                    $scope.wallet = true;
                    $scope.display_dispatching=1;
                } else if (buttList[i] == '2-app') { //充值记录
                    $scope.detail = true;
                    $scope.display_vehicle=2;
                }

            }

        }
        $scope.setWalletTabs();
        $scope.$on('$ionicView.beforeEnter', function(){
            // window.xzNavigationTool && $scope.setTitle();
            $scope.setWalletTabs();
            // $scope.purchaseList();
        });
    })
.controller("walletCtrl", function(appMain,$scope, interface, $timeout, $state, $rootScope,$filter) {
    var info = appMain.getLocal('userInfo');
    $scope.conList = [];
    $scope.sumNum = '';

    //获取用户消费列表
    $scope.consumptionList = function () {
        var params = {
            userId : info.userId
        }
        interface.consumeList(params).then(function (response) {
            if(response.data.flag == 0){
                $scope.conList = response.data.dataList;
                for(i=0;i<$scope.conList.length;i++){
                    var create = $scope.conList[i].CREATION_DATE;
                     create= create.toString().substring(0,10).split('-');
                    $scope.conList[i].CREATION_DATE = create[0]+'年'+create[1]+'月'+create[2]+'日';
                    // $scope.conList[i].CREATION_DATE
                }
            }else{
                $scope.showToast(response.data.msg);
            }
        })
    };
    $scope.consumptionList();
    //获取金额总数
    $scope.sum = function () {
        var params = {
            userId : info.userId
        }
        interface.getSum(params).then(function (response) {
            if(response.data.flag == 0){
                $scope.sumNum = response.data.IN_MONEY;
            }
        })
    };
    $scope.sum();
    //立即充值按钮
    $scope.chargeMoney = function () {
        $state.go('recharge');
    }
    $scope.backHome = function () {
        console.info('back')
        $state.go('app.homepage');
    }
})
.controller("detailCtrl", function(appMain,$scope, interface, $timeout, $state, $rootScope,$filter) {
    var info = appMain.getLocal('userInfo');
    $scope.depList = [];
    //获取金额总数
    $scope.sum = function () {
        var params = {
            userId : info.userId
        }
        interface.getSum(params).then(function (response) {
            if(response.data.flag == 0){
                $scope.sumNum = response.data.IN_MONEY;
            }
        })
    };
    $scope.sum();
    //获取用户充值列表
    $scope.depositList = function () {
        var params = {
            userId : info.userId
        }
        interface.deposit(params).then(function (response) {
            if(response.data.flag == 0){
                $scope.depList = response.data.dataList;
                for(i=0;i<$scope.depList.length;i++){
                    var endDate = $scope.depList[i].CREATION_DATE;
                    endDate= endDate.toString().substring(0,10).split('-');
                    $scope.depList[i].CREATION_DATE = endDate[0]+'年'+endDate[1]+'月'+endDate[2]+'日';
                }
            }else{
                $scope.showToast(response.data.msg);
            }

        })
    }
    $scope.depositList();
    //立即充值按钮
    $scope.chargeMoney = function () {
        $state.go('recharge');
    }
})
.controller("couponCtrl", function(appMain,$scope, interface, $timeout, $state, $rootScope,$filter) {
    var info = appMain.getLocal('userInfo');
    //获取优惠券列表
    $scope.getCouponList = function () {
        var params = {
            userId : info.userId
        }
        interface.getCouponList(params).then(function (response) {
            if(response.data.flag == 0){
                $scope.couponList = response.data.dataList;
            }else{
                $scope.showToast(response.data.msg);
            }

        })
    }
    $scope.getCouponList();
})
.controller("mycardCtrl", function(appMain,$scope, interface, $timeout, $state, $rootScope,$filter) {
    var info = appMain.getLocal('userInfo');
    $scope.cardInfo = {
        type : 'x',
        number : ''
    }
    //获取银行卡列表
    $scope.getCardList = function () {
        var params = {
            userId : info.userId
        }
        interface.searchCard(params).then(function (response) {
            console.info(response)
            if(response.data.flag == 0){
                $scope.cardList = response.data.cardsList;
                for (i=0;i<$scope.cardList.length;i++){
                    if($scope.cardList[i].CARD_TYPE == 'x'){
                        $scope.cardList[i].CARD_TYPE = '信用卡';
                    }else if($scope.cardList[i].CARD_TYPE == 'c'){
                        $scope.cardList[i].CARD_TYPE = '储蓄卡';
                    }
                }
            }
        })
    }
    $scope.getCardList();
    $scope.addCard = function () {
        $state.go('addcard')
    };
    //添加银行卡
    $scope.addCardInfo = function () {
        //判断卡号是否为纯数字
        var value = $scope.cardInfo.number;
        var reg=/^[1-9]\d*$|^0$/;   // 注意：故意限制了 0321 这种格式
        if(reg.test(value)==false){
            $scope.showToast('请输入正确卡号');
            return false;
        }
        if (!$scope.cardInfo.number){
            $scope.showToast('请输入卡号');
            return false;
        }else if($scope.cardInfo.number.length != 19){
            console.info($scope.cardInfo.number,$scope.cardInfo.number.length)
            //工商银行的卡只有19位
            $scope.showToast('请输入正确卡号');
            return false;
        }

        var params = {
            user_id : info.userId,
            card_type : $scope.cardInfo.type,
            card_no : $scope.cardInfo.number,
            bank_type : 'ICBC'
        }
        interface.addCard(params).then(function (response) {
            console.info(response)
            console.info($scope.cardInfo.type)
            if(response.data.flag == 0){
                $scope.showToast('添加成功');
                $state.go('mycard');
            }else{
                $scope.showToast('添加失败');
            }
        })
    }
})
    .controller("rechargeCtrl", function(appMain,$scope, interface, $timeout, $state, $rootScope,$filter) {
        $scope.tmpList = [];
        var info = appMain.getLocal('userInfo');
        $scope.checkNo = 0;
        //获取面值
        function getMoneys() {
            var params = {
                userId : info.userId
            };
            interface.getTmpList(params).then(function (response) {
                if(response.data.flag == 0){
                    $scope.tmpList = response.data.dataList;
                    $scope.tmpList[0].isChecked = true;
                    for(var i = 1;i< $scope.tmpList.length;i++){
                        $scope.tmpList[i].isChecked = false;
                    }
                }else{
                    $scope.showToast(response.data.msg);
                }

            })
        }
        $scope.tmpList = [];
        getMoneys();
        $scope.getThis = function (index) {
            $scope.checkNo = index;
            console.info($scope.checkNo)
            for(var i = 0;i< $scope.tmpList.length;i++){
                $scope.tmpList[i].isChecked = false;
            }
            $scope.tmpList[index].isChecked = true;
        }
        //充值提交按钮
        $scope.chargeMoney = function () {
            console.info($scope.checkNo)
            var params = {
                user_id : info.userId,
                tmp_h_id :$scope.tmpList[$scope.checkNo].TMP_MONEY
            }
            interface.charge(params).then(function (response) {
                $scope.showToast(response.data.msg);
                //成功就跳转至消费记录页面
                if(response.data.flag == 0){
                    $state.go('wallettabs.detail');
                }
            })
        }
    });
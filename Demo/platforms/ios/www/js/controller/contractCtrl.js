myApp.controller("contractCtrl", function($scope, $state, $ionicHistory,$rootScope,contract,$stateParams,$timeout,appMain) {
  var userInfo= appMain.getLocal("userInfo");
  var token = userInfo.token;
  $scope.purchaserId=userInfo.purchaserId;
  var params={
    purchaserId:$scope.purchaserId,
    pageNum:0,
    count:12,
    token:token
  }
  contract.contractlist(params).then(function (response) {
    if(response.code==1){
      $scope.contractlists=response.contractList;
      $scope.page=response.contractList.length;
      if(response.contractList.length==0){
        $scope.nltip = 1;
      }
    }else{
      $scope.showToast(response.msg);
    }
  });
  $scope.toDetail = function(id){
    $state.go("contractDetail", {
        id: id
    })
  }
  $scope.pageNum = 0;
  $scope.count = 12;
  $scope.contractlists = [];
  $scope.showScroll = false;
  //刷新
  $scope.doRefreshContractList = function(n){
    if(!n){
      $scope.nltip = 0;
    }
    $scope.showScroll = true;
     $scope.pageNum = 0;
    $scope.contractlists = [];
    var params={
      purchaserId:$scope.purchaserId,
      pageNum:$scope.pageNum,
      count:$scope.count,
      token:token

    }
    contract.contractlist(params).then(function (response) {
      $scope.nltip = 0;
      if(response){
        var list = response.contractList;
        if(list&&list.length>0){
          $scope.contractlists = list;
          if(n!=2){
            $scope.$broadcast("scroll.refreshComplete");
          }
          if(list.length>$scope.count-1){
            $scope.showScroll = true;
            $scope.$broadcast("scroll.infiniteScrollComplete");
          }else{
            $scope.nltip = 1;
          }
        }else{
          $scope.nltip = 1;
          $scope.$broadcast("scroll.refreshComplete");
        }
      }else{
        $scope.showToast(response.msg);
      }
    })
  },
  //加载
  $scope.loadMoreContractList=function(){
    $scope.pageNum++;
    var params={
      purchaserId:$scope.purchaserId,
      pageNum:$scope.pageNum,
      count:$scope.count,
      token:token
    }
    contract.contractlist(params).then(function (response) {
      var list = response.contractList;
      if(response.contractList && list instanceof Array){
        $scope.contractlists = $scope.contractlists.concat(list);
        if(list.length < $scope.count || list.length < 1){
          $scope.showScroll = false;
          $scope.nltip = 1;
        }
      }else{
        $scope.nltip = 1;
        $scope.showScroll = false;
      }
      $scope.$broadcast("scroll.infiniteScrollComplete");
    })
  }
  $scope.$on('$ionicView.beforeEnter', function(){
    $scope.doRefreshContractList();
  });
}).controller("contractDetailCtrl", function($scope, $state, $rootScope,contract,$stateParams,$ionicHistory,appMain) {
  var userInfo= appMain.getLocal("userInfo");
  var token = userInfo.token;
  $scope.userId=userInfo.id;
  var params={
    id:$stateParams.id,
    token:token
  }
  contract.contractdetail(params).then(function (response) {
    if(response.code==1){
      $scope.contract=response.contract;
    }else{
      $scope.showToast(response.msg);
    }
  });

});
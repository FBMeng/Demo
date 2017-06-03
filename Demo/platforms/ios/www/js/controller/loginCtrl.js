myApp.controller("loginCtrl", function(interface,appMain,$scope, $state, $rootScope) {
    var info = appMain.getLocal('userInfo');
    console.info(info)
	$scope.login = function () {
		if(!$scope.uname){
            $scope.showToast('请输入用户名');
            return false;
		}else if(!$scope.upwd){
            $scope.showToast('请输入密码');
            return false;
		}
		var params = {
            userName : $scope.uname,
            password : $scope.upwd
		}
		interface.login(params).then(function (response) {
			console.info(response)
			if(response.data.flag == 1){
                $scope.showToast(response.data.msg);
			}else{
				var userInfo = {
                    userName : $scope.uname,
                    password : $scope.upwd,
					userId : response.data.USER_ID
				};
                //用户名密码存本地
                appMain.setLocal({
                	'data' : userInfo,
					'key' : 'userInfo'
				})
                $state.go('app.homepage');
			}
        })
    }
    //自动登录
                 if(info){
                    if(info.userName){
                        $scope.uname = info.userName;
                     if(info.password){
                        $scope.upwd = info.password;
                        $scope.login();
                        }
                     }else{
                     $scope.uname = '';
                     $scope.upwd = '';
                     }
                 }
            
                 
    
})

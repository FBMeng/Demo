myApp.controller("setCtrl", function($scope, appMain, $state, $ionicSlideBoxDelegate, $rootScope,interface) {
    // $scope.refreshName = function () {
    //     $state.go('rename')
    // }

    $scope.userInfo = {
        userName : '',
        name :'',
        sex : '3',
        tel :'',
        email : '',
        idCard : ''
    }
    var info = appMain.getLocal('userInfo');
    //查询用户详细信息
    $scope.searchPersonInfo = function () {
        var params = {
            userId : info.userId
        }
        interface.getPersonInfo(params).then(function (response) {
            console.info(response)
            if(response.data.flag == 0){
                $scope.userInfo.userName = response.data.backInfo.USER_NAME;
                $scope.userInfo.name = response.data.backInfo.EMP_NAME;
                $scope.userInfo.sex = response.data.backInfo.EMP_SEX;
                $scope.userInfo.tel = response.data.backInfo.PHONE_NO;
                $scope.userInfo.email = response.data.backInfo.EMAIL;
                $scope.userInfo.idCard = response.data.backInfo.ID_NO;
            }
        })
    }
    $scope.searchPersonInfo();
    $scope.subUserInfo = function () {
        if(!$scope.userInfo.userName){
            $scope.showToast('请输入用户名');
            return false;
        } else if(!$scope.userInfo.name){
            $scope.showToast('请输入姓名');
            return false;
        }else if(!$scope.userInfo.sex){
            $scope.showToast('请选择性别');
            return false;
        }else if(!$scope.userInfo.tel||!(/^1[34578]\d{9}$/.test($scope.userInfo.tel))){
            $scope.showToast('请输入正确手机号码');
            return false;
        }else if(!$scope.userInfo.email||!(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test($scope.userInfo.email))){
            $scope.showToast('请输入正确邮箱地址');
            return false;
        }else if(!$scope.userInfo.idCard||!(/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test($scope.userInfo.idCard))){
            $scope.showToast('请输入正确身份证号码');
            return false;
        }
        var params = {
            userId : info.userId,
            emp_name : $scope.userInfo.name,
            user_name : $scope.userInfo.userName,
            emp_sex : $scope.userInfo.sex,
            id_no : $scope.userInfo.idCard,
            phone_no : $scope.userInfo.tel,
            email : $scope.userInfo.email
        }
        interface.editUser(params).then(function (responsoe) {
                $scope.showToast(responsoe.data.msg);
        })
    }
    $scope.exit = function () {
        var params = {
            userId : info.userId
        }
        interface.exit(params).then(function (response) {
            console.info(response)
            if(response.data.flag == 0){
                $state.go('login');
                var userInfo = {
                    userName : info.userName,
                    password : '',
                    userId : ''
                }
                //用户名密码存本地
                appMain.setLocal({
                    'data' : userInfo,
                    'key' : 'userInfo'
                })
            }else{
                $scope.showToast(responsoe.data.msg);
            }
        })

    }
})
    .controller("renameCtrl", function($scope, appMain, $state, $ionicSlideBoxDelegate, $rootScope) {
    })
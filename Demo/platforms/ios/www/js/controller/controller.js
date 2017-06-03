var myApp=angular.module("ionicApp.controllers", []);
myApp.controller("appMain", function(appMain,$scope, $state, $rootScope,$timeout, $ionicHistory) {
	var accout = appMain.getLocal("account");
	if(accout&&accout!=""){
		console.info(accout);
		$state.go("app.home");
		return;
	}

});
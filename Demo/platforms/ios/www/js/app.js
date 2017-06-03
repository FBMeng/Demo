angular.module('ionicApp', ['ionic', 'ionicApp.controllers', 'ionicApp.services', 'ngCordova', 'ngConstants', 'ngLoadImg'])
	.run(function(
		$ionicPlatform, $state, $rootScope, $ionicHistory, $ionicLoading, $ionicPlatform, $timeout,
		appMain, $cordovaToast, $cordovaSplashscreen, $cordovaStatusbar, $window, $location, $log, $templateCache,
		$cordovaAppVersion,$cordovaFileTransfer,$cordovaFileOpener2,$ionicLoading,$ionicPopup) {

		var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);

		function stateChangeSuccess($rootScope) {
			$templateCache.removeAll();
		}

		$ionicPlatform.ready(function() {
			window.cordova && (setTimeout(function() {
					$cordovaSplashscreen.hide()
				}, 10),
				setTimeout(function() {
					window.cordova.plugins.Keyboard.disableScroll(true);
					window.cordova.plugins.Keyboard && cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0);
					$rootScope.$on("$cordovaNetwork:offline", function(e, o) {
						$cordovaToast.showShortBottom("系统已断开网络连接")
					})
				}, 50)
			);
			/***************热更新***********************/
			var u = navigator.userAgent;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端true/false
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端true/false
			if(isAndroid==true){
			//检验更新
    		var update_name="";
    		var update_install_url="";
    		var update_changelog="";
            function checkUpdate() {
            	//调用fir.im API接口，获取安装包信息
            	var url="http://api.fir.im/apps/latest/com.zdgr.fenmeihui?api_token=0f7e12de54314baedfbce52cccc48d28";
            	$.ajax({
                    url:url,
                    dataType :"json",
                    offline:false,
                    success:function(data){
                        update_name=data.name;//应用名称
                        update_install_url=data.install_url;//下载URL
                        update_changelog=data.changelog;//更新日志
                        var serverAppVersion = data.versionShort; //最新版本
    		            //获取版本
    		            $timeout(function (data) {
    						window.cordova && $cordovaAppVersion.getVersionNumber().then(function (version) {
    			                //如果本地与服务端的APP版本不符合
    			                if (version.version != serverAppVersion) {
    			                    showUpdateConfirm(serverAppVersion);
    			                }
    			            });
    					},500);

                    }
                });

            }
            //显示是否更新对话框
            function showUpdateConfirm(a) {
                var confirmPopup = $ionicPopup.confirm({
                    title: '版本升级',
                    template: update_changelog, //从服务端获取更新的内容
                    cancelText: '取消',
                    okText: '升级'
                });
                //确定更新
	            confirmPopup.then(function (res) {
	                if (res) {
	                    $ionicLoading.show({
	                        template: "已经下载：0%"
	                    });
	                    var url = update_install_url; //从fir.im服务端获取的APP更新路径
	                   	var targetPath = "/1oma/"+update_name+".apk";//安装包下载到手机的存放路径
	                    var trustHosts = true;
	                    var options = {};
	                    //下载安装包
	                    $cordovaFileTransfer.download(url, targetPath, options, trustHosts).then(function (result) {
	                        // 打开下载下来的APP
	                        $cordovaFileOpener2.open(targetPath, 'application/vnd.android.package-archive'
	                        ).then(function () {
	                                // 成功
	                            }, function (err) {
	                                // 错误
	                            });
	                        $ionicLoading.hide();
	                    }, function (err) {
	                        alert('下载失败');
	                    }, function (progress) {
	                        //进度，这里使用文字显示下载百分比
	                        $timeout(function () {
	                            var downloadProgress = (progress.loaded / progress.total) * 100;
	                            $ionicLoading.show({
	                                template: "已经下载：" + Math.floor(downloadProgress) + "%"
	                            });
	                            if (downloadProgress > 99) {
	                                $ionicLoading.hide();
	                            }
	                        })
	                    });
	                } else {
	                    // 取消更新
	                }
	            });
            }
    	checkUpdate();				
		}
		if(isiOS==true){
			var update_name="";
    		var update_install_url="";
    		var update_changelog="";
        	//调用fir.im API接口，获取安装包信息
        	var url="http://api.fir.im/apps/latest/com.zdgr.fenmeihui?api_token=0f7e12de54314baedfbce52cccc48d28";
        	$.ajax({
                url:url,
                dataType :"json",
                offline:false,
                success:function(data){
                    update_name=data.name;//应用名称
                    update_install_url=data.update_url;//下载URL
                    update_changelog=data.changelog;//更新日志
                    //navigator.app.loadUrl(update_install_url,{ openExternal:true });
                    window.open(update_install_url, '_system', 'location=yes');
                   
                }
            });
		}
    	/***************热更新***********************/
	});
	//安卓返回键
	$ionicPlatform.registerBackButtonAction(function(e) {
		if ($state.current.name.indexOf("app") > -1||$state.current.name.indexOf("driver") > -1) {
			if ($rootScope.backButtonPressedOnceToExit) {
                ionic.Platform.exitApp();
            } else {
                $rootScope.backButtonPressedOnceToExit = true;
                $cordovaToast.showShortBottom('再按一次退出系统');
                setTimeout(function () {
                    $rootScope.backButtonPressedOnceToExit = false;
                }, 2000);
            }
		} else {
			history.go(-1);
		}
	}, 101);

	$rootScope.showLoad = function() {
		$ionicLoading.show({
			duration: 15e3
		})
	}

	$rootScope.hideLoad = function() {
		$ionicLoading.hide();
	}
	$rootScope.showError = function() {
		console.error("加载失败");
		window.cordova && $cordovaToast.showShortBottom("加载失败");
	}
	$rootScope.showToast = function(msg) {
		if(msg==""||msg==null||msg==undefined){
			msg=" ";
		}else{
			console.log(msg)
			window.cordova && $cordovaToast.showShortBottom(msg);
		}
		
	}

}).config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $compileProvider) {
	$ionicConfigProvider.platform.ios.tabs.style("standard");
	$ionicConfigProvider.platform.ios.tabs.position("bottom");
	$ionicConfigProvider.platform.android.tabs.style("standard");
	$ionicConfigProvider.platform.android.tabs.position("bottom");
	$ionicConfigProvider.platform.ios.navBar.alignTitle("center");
	$ionicConfigProvider.platform.android.navBar.alignTitle("center");
	$ionicConfigProvider.platform.ios.views.transition("ios");
	$ionicConfigProvider.platform.android.views.transition("android");
	$ionicConfigProvider.backButton.text("");
	$ionicConfigProvider.backButton.previousTitleText(!1);
	$ionicConfigProvider.views.maxCache(5);
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|http|ftp|mailto|chrome-extension|tel|file):/);
	$stateProvider.state("login", {
			url: "/login",
			cache: "false",
			templateUrl: "templates/login/login.html",
			controller: "loginCtrl"
		}).state("app", {
			url: "/app",
			"abstract": true,
			// cache:"false",
			templateUrl: "templates/homepage/pagetabs.html",
			prefetchTemplate:false,//部分加载，点击调用
			// controller: "homeCtrl"
			controller: "tabsCtrl"
		}).state("app.homepage", {
			url: "/homepage",
			cache: "false",
            views: {
			    'home-tab':{
                    templateUrl: "templates/homepage/homepage.html",
                    prefetchTemplate:false,
                    controller: "homepageCtrl"
                }
            }
		}).state("app.person", {
        url: "/person",
        cache: "false",
        views: {
            "person-tab": {
                templateUrl: "templates/personinfo/person.html",
                prefetchTemplate:false,
                controller: "personCtrl"
            }
        }
    }).state("app.set", {
        url: "/set",
        cache: "false",
        views: {
            "set-tab": {
                templateUrl: "templates/set/set.html",
                prefetchTemplate:false,
                controller: "setCtrl"
            }
        }
    }).state("rename", {
        url: "/rename",
        cache: "false",
        templateUrl: "templates/set/rename.html",
        controller: "renameCtrl"
    }).state("wallettabs", {
        url: "/apptabs",
        "abstract": true,
        // cache:"false",
        templateUrl: "templates/homepage/wallettabs.html",
        prefetchTemplate:false,//部分加载，点击调用
        controller: "walletTabsCtrl"
    }).state("wallettabs.wallet", {
        url: "/wallet",
        cache: "false",
        views: {
            "wallet-tab": {
                templateUrl: "templates/homepage/mywallet.html",
                prefetchTemplate:false,
                controller: "walletCtrl"
            }
        }
    }).state("wallettabs.detail", {
        url: "/detail",
        cache: "false",
        views: {
            "detail-tab": {
                templateUrl: "templates/homepage/detail.html",
                prefetchTemplate:false,
                controller: "detailCtrl"
            }
        }
    }).state("coupon", {
        url: "/coupon",
        cache: "false",
        templateUrl: "templates/homepage/coupon.html",
        controller: "couponCtrl"
    }).state("mycard", {
        url: "/mycard",
        cache: "false",
        templateUrl: "templates/homepage/mycard.html",
        controller: "mycardCtrl"
    }).state("addcard", {
        url: "/addcard",
        cache: "false",
        templateUrl: "templates/homepage/addcard.html",
        controller: "mycardCtrl"
    }).state("recharge", {
        url: "/recharge",
        cache: "false",
        templateUrl: "templates/homepage/recharge.html",
        controller: "rechargeCtrl"
    });
		$urlRouterProvider.otherwise("login");
});
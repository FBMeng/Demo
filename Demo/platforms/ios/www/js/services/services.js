angular.module("ionicApp.services",[]).factory("root",function(){
	return null;
}).factory("interface",function(constants,root, $http, $q,$rootScope){
	return {
		//登录
		login:function(params){
			var deferred = $q.defer();
			return $http.post(constants.getRoot().login+$.param(params)).success(function(data){
				deferred.resolve(data);
			}).error(function(){
				$rootScope.showError();
				deferred.resolve(!1);
			}), deferred.promise
		},
        //获取存入金额
        getInList:function(params){
            var deferred = $q.defer();
            return $http.post(constants.getRoot().getInList+$.param(params)).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                $rootScope.showError();
                deferred.resolve(!1);
            }), deferred.promise
        },
        //获取首页数据
        homeData:function(params){
            var deferred = $q.defer();
            return $http.post(constants.getRoot().homeData+$.param(params)).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                $rootScope.showError();
                deferred.resolve(!1);
            }), deferred.promise
        },
        //获取充值列表
        deposit:function(params){
            var deferred = $q.defer();
            return $http.post(constants.getRoot().deposit+$.param(params)).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                $rootScope.showError();
                deferred.resolve(!1);
            }), deferred.promise
        },
        //获取消费列表
        consumeList:function(params){
            var deferred = $q.defer();
            return $http.post(constants.getRoot().consumeList+$.param(params)).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                $rootScope.showError();
                deferred.resolve(!1);
            }), deferred.promise
        },
        //获取模板列表
        getTmpList:function(params){
            var deferred = $q.defer();
            return $http.post(constants.getRoot().getTmpList+$.param(params)).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                $rootScope.showError();
                deferred.resolve(!1);
            }), deferred.promise
        },
        //获取优惠券列表
        getCouponList:function(params){
            var deferred = $q.defer();
            return $http.post(constants.getRoot().getCouponList+$.param(params)).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                $rootScope.showError();
                deferred.resolve(!1);
            }), deferred.promise
        },
        //获取总金额
        getSum:function(params){
            var deferred = $q.defer();
            return $http.post(constants.getRoot().getNumIn+$.param(params)).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                $rootScope.showError();
                deferred.resolve(!1);
            }), deferred.promise
        },
	//	查询用户信息
        getPersonInfo:function(params){
            var deferred = $q.defer();
            return $http.post(constants.getRoot().getPersonInfo+$.param(params)).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                $rootScope.showError();
                deferred.resolve(!1);
            }), deferred.promise
        },
        //	修改用户信息
        editUser:function(params){
            var deferred = $q.defer();
            return $http.post(constants.getRoot().editUser+$.param(params)).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                $rootScope.showError();
                deferred.resolve(!1);
            }), deferred.promise
        },
        //	添加银行卡信息
        addCard:function(params){
            var deferred = $q.defer();
            return $http.post(constants.getRoot().addBankCard+$.param(params)).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                $rootScope.showError();
                deferred.resolve(!1);
            }), deferred.promise
        },
        //	查询银行卡信息
        searchCard:function(params){
            var deferred = $q.defer();
            return $http.post(constants.getRoot().searchCard+$.param(params)).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                $rootScope.showError();
                deferred.resolve(!1);
            }), deferred.promise
        },
        //	充值
        charge:function(params){
            var deferred = $q.defer();
            return $http.post(constants.getRoot().charge+$.param(params)).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                $rootScope.showError();
                deferred.resolve(!1);
            }), deferred.promise
        },
        //	退出
        exit:function(params){
            var deferred = $q.defer();
            return $http.post(constants.getRoot().exit+$.param(params)).success(function(data){
                deferred.resolve(data);
            }).error(function(){
                $rootScope.showError();
                deferred.resolve(!1);
            }), deferred.promise
        },
		
	}
}).factory("appMain",function($http, root, $q){
	return {
		setLocal:function(e){
			console.info(e.key);
			e.data && (e.data = JSON.stringify(e.data)), window.localStorage[e.key] = e.data
		},
		getLocal:function(e){
			var http = window.localStorage[e];
			return http ? JSON.parse(http) : null
		},
		getUserInfo:function(e){
			var deferred = $q.defer();
			var tel = "15600056050";
			var password = "fansl123";
			var str = "phone="+tel+"&pwd="+password;
			return $http.post(root.getRoot().login+str).success(function(data){
				deferred.resolve(data);
			}).error(function(){
				deferred.resolve(!1);
			}), deferred.promise
		}
	}
}).factory("contract",function(constants,root, $http, $q,$rootScope){
	return {
		contractlist:function(params){
			var deferred = $q.defer();
			return $http.post(constants.getRoot().contractlist+$.param(params)).success(function(data){
				deferred.resolve(data);
			}).error(function(){
				$rootScope.showError();
				deferred.resolve(!1);
			}), deferred.promise
		},
		contractdetail:function(params){
			var deferred = $q.defer();
			return $http.post(constants.getRoot().contractdetail+$.param(params)).success(function(data){
				deferred.resolve(data);
			}).error(function(){
				$rootScope.showError();
				deferred.resolve(!1);
			}), deferred.promise
		},
	}
}).factory("dispatch",function(constants,root, $http, $q,$rootScope){
	return {
		getDispatchPlan:function(params){
			var deferred = $q.defer();
			return $http.post(constants.getRoot().dispatch+$.param(params)).success(function(data){
				deferred.resolve(data);
			}).error(function(){
				deferred.resolve(!1);
			}),deferred.promise
		},
		adddispatchtruck:function(params){
			var deferred = $q.defer();
			return $http.post(constants.getRoot().adddispatchtruck+$.param(params)).success(function(data){
				deferred.resolve(data);
			}).error(function(){
				deferred.resolve(!1);
			}),deferred.promise
		},
		getdispatchtrucklist:function(params){
			var deferred = $q.defer();
			return $http.post(constants.getRoot().getdispatchtrucklist+$.param(params)).success(function(data){
				deferred.resolve(data);
			}).error(function(){
				deferred.resolve(!1);
			}),deferred.promise
		},

	}
}).filter("dis_plan",function(){
    return function(e){
        var dis_plan;
        switch(e){
            case 0:
            dis_plan = "disPlanr";//待反馈，绿色
            break;
            case 1:
            dis_plan = "disPlanb";//已反馈，绿色
            break;      
        }
        return dis_plan;
    }
}).filter("zb_plan",function(){
    return function(e){
        var zb_plan;
        switch(e){
            case 1:
            zb_plan = "zb_plan_r";//增补，红色
            break;
            case 0:
            zb_plan = "zb_plan_";
            break;      
        }
        return zb_plan;
    }
}).filter("desc",function(){
    return function(e){
        var des;
        switch(e){
            case 0:
            des = "待反馈";
            break;
            case 1:
            des = "已反馈";
            break;      
        }
        return des;
    }
}).filter("desc1",function(){
    return function(e){
        var des1;
        switch(e){
            case 0:
            des1 = "日常计划";
            break;
            case 1:
            des1 = "增补计划";//增补,红色
            break;      
        }
        return des1;
    }
}).filter("time",function(){
    return function(e){
        var time;
        switch(e){
            case 0:
            time = "time_green";//等待，绿色
            break;
            case 1:
            time = "time_blue";//已经，蓝色色
            break;      
        }
        return time;
    }
}).filter("time1",function(){
    return function(e){
        var time1;
        switch(e){
            case 0:
            time1 = "";
            break;
            case 1:
            time1 = "time_red";//增补，红色
            break;      
        }
        return time1;
    }
}).factory("truck",function(constants,root, $http, $q,$rootScope){
	return {
		trucklist:function(params){
			var deferred = $q.defer();
			return $http.post(constants.getRoot().trucklist+$.param(params)).success(function(data){
				deferred.resolve(data);
			}).error(function(){
				$rootScope.showError();
				deferred.resolve(!1);
			}), deferred.promise
		},
		edittruck:function(params){
			var deferred = $q.defer();
			return $http.post(constants.getRoot().edittruck+$.param(params)).success(function(data){
				deferred.resolve(data);
			}).error(function(){
				$rootScope.showError();
				deferred.resolve(!1);
			}), deferred.promise
		},
		gettruck:function(params){
			var deferred = $q.defer();
			return $http.post(constants.getRoot().gettruck+$.param(params)).success(function(data){
				deferred.resolve(data);
			}).error(function(){
				$rootScope.showError();
				deferred.resolve(!1);
			}), deferred.promise
		},
	}
})
.factory("driver",function(constants,root, $http, $q,$rootScope){
	return{
		getMessList:function(params){
			var deferred = $q.defer();
			return $http.post(constants.getRoot().msgList+$.param(params)).success(function(data){
				deferred.resolve(data);
			}).error(function(){
				$rootScope.showError();
				deferred.resolve(!1);
			}), deferred.promise
		},
		getTruckLine:function(params){
			var deferred = $q.defer();
			return $http.post(constants.getRoot().getTruckLine+$.param(params)).success(function(data){
				deferred.resolve(data);
			}).error(function(){
				$rootScope.showError();
				deferred.resolve(!1);
			}), deferred.promise
		},
		dispatchtimes:function(params){
			var deferred = $q.defer();
			return $http.post(constants.getRoot().dispatchtimes+$.param(params)).success(function(data){
				deferred.resolve(data);
			}).error(function(){
				deferred.resolve(!1);
			}),deferred.promise
		}
	}
});
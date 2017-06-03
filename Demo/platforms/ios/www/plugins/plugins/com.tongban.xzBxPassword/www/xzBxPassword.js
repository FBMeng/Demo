cordova.define("com.tongban.xzBxPassword.xzBxPassword", function(require, exports, module) {
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');
	function xzBxPassword(){

	}
	xzBxPassword.prototype.getBxPassword = function(successCallback, errorCallback) {
	    exec(successCallback, errorCallback, "xzBxPassword", "getBxPassword", []);
	};
	xzBxPassword.prototype.cbBxPassword = function(successCallback, errorCallback) {
	    exec(successCallback, errorCallback, "xzBxPassword", "cbBxPassword", []);
	};
	module.exports = new xzBxPassword();
});

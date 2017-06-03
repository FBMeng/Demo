cordova.define("com.tongban.xzWebViewURL.xzWebViewURL", function(require, exports, module) {
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');
function xzWebViewURL(){

}
xzWebViewURL.prototype.loadWebUrl = function(successCallback, errorCallback,url,str) {
	if(!url){
		url = "";
	}
	if(!str){
		str = ""
	}
	console.info(str);
    exec(successCallback, errorCallback, "xzWebViewURL", "loadWebUrl", [url,str]);
};
module.exports = new xzWebViewURL();
});

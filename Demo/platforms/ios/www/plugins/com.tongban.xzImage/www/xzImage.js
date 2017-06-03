cordova.define("com.tongban.xzImage.xzImage", function(require, exports, module) {
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');
function xzImage(){

}
xzImage.prototype.openPicker = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "xzImage", "openPicker", []);
};
xzImage.prototype.openBrowser = function(successCallback, errorCallback,options) {
    if (!options) {
		options = {};
	}
	var params = {
		displayActionButton: options.displayActionButton ? options.displayActionButton : false,
		displayNavArrows: options.displayNavArrows ? options.displayNavArrows : false,
		enableGrid: options.enableGrid ? options.enableGrid :false,
		startIndex: options.startIndex ? options.startIndex : 0,
		data:options.data
	};
    exec(successCallback, errorCallback, "xzImage", "openBrowser", [params]);
};
xzImage.prototype.openCropper = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "xzImage", "openCropper", []);
};
xzImage.prototype.clearOutputImages = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "xzImage", "clearOutputImages", []);
};
xzImage.prototype.saveToPhotoAlbum = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "xzImage", "saveToPhotoAlbum", []);
};
module.exports = new xzImage();
});

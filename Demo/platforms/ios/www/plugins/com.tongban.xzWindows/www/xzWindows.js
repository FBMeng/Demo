cordova.define("com.tongban.xzWindows.xzWindows", function(require, exports, module) {
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');
var xzWindows = function() {
};

xzWindows.close = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "xzWindows", "close", []);
};

module.exports = xzWindows;
});

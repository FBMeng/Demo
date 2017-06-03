cordova.define("com.tongban.xzUser.xzUser", function(require, exports, module) {
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');
function xzUser(){

}
xzUser.prototype.info = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "xzUser", "info", []);
};
xzUser.prototype.calendarInfo = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "xzUser", "calendarInfo", []);
};
xzUser.prototype.getBxPassword = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "xzBxPassword", "getBxPassword", []);
};
xzUser.prototype.cbBxPassword = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "xzBxPassword", "cbBxPassword", []);
};
module.exports = new xzUser();
});

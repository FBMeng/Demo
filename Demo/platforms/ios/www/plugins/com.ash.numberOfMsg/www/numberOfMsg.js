cordova.define("com.ash.numberOfMsg.numberOfMsg", function(require, exports, module) {
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');
function numberOfMsg(){

}
    numberOfMsg.prototype.numberOfMsg = function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, "numberOfMsg", "numberOfMsg", []);
    };
    numberOfMsg.prototype.clear = function(successCallback, errorCallback,options) {
        exec(successCallback, errorCallback, "numberOfMsg", "clear", [options]);
    };
module.exports = new numberOfMsg();
});

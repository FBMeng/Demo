cordova.define("com.ash.rongCloudPlugin.rongCloudPlugin", function(require, exports, module) {
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');
function rongCloudPlugin(){

}
    rongCloudPlugin.prototype.conn  = function(successCallback, errorCallback,options) {
        if (!options) {
            options = {};
        }
        exec(successCallback, errorCallback, "rongCloudPlugin", "conn", [options]);
    };
    rongCloudPlugin.prototype.close  = function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, "rongCloudPlugin", "close", []);
    };
module.exports = new rongCloudPlugin();
});

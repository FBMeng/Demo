cordova.define("com.tongban.xzLocation.xzLocation", function(require, exports, module) {
var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');
function xzLocation(){

}
xzLocation.prototype.aMapPOIAroundSearch = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "xzLocation", "aMapPOIAroundSearch", []);
};
xzLocation.prototype.openLocation = function(successCallback, errorCallback){
    exec(successCallback, errorCallback, "xzLocation", "openLocation",[]);
}
module.exports = new xzLocation();
});

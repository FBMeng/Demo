cordova.define("cordova.DMQSoft.umengUpdate.umengUpdate", function(require, exports, module) { 
function umengUpdate() {
}


umengUpdate.prototype.isPlatformIOS = function () {
    return device.platform == "iPhone" || device.platform == "iPad" || device.platform == "iPod touch" || device.platform == "iOS"
}

umengUpdate.prototype.error_callback = function (msg) {
    console.log("Javascript Callback Error: " + msg)
}

umengUpdate.prototype.call_native = function (name, args, callback) {

    ret = cordova.exec(callback, this.error_callback, 'umengUpdate', name, args);
    return ret;
}
//public plugin function

//android single
//调用更新接口
umengUpdate.prototype.update = function () {
    if (device.platform == "Android") {
        data = [];
        this.call_native("update", data, null);
    }
}

//网络环境更新(true,false)
umengUpdate.prototype.setUpdateOnlyWifi = function (flag) {
    if (device.platform == "Android") {
        data = [flag];
        this.call_native("setUpdateOnlyWifi", data, null);
    }
}


module.exports = new umengUpdate();


umengUpdate.install = function () {
    if (!window.plugins) {
        window.plugins = {};
    }

    window.plugins.umengUpdate = new umengUpdate();
    return window.plugins.umengUpdate;
};

cordova.addConstructor(umengUpdate.install);

});

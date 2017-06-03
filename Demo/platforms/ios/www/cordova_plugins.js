cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file" : "plugins/com.ash.rongCloudPlugin/www/rongCloudPlugin.js",
        "id" : "com.ash.rongCloudPlugin.rongCloudPlugin",
        "clobbers":[
            "rongCloudPlugin"
        ]
    },
    {
        "file" : "plugins/com.ash.numberOfMsg/www/numberOfMsg.js",
        "id" : "com.ash.numberOfMsg.numberOfMsg",
        "clobbers":[
            "numberOfMsg"
        ]
    },
    {
        "file" : "plugins/cordova-plugin-chcp/www/chcp.js",
        "id" : "cordova-plugin-chcp.chcp",
        "clobbers":[
            "chcp"
        ]
    },
    {
        "file" : "plugins/com.tongban.xzWebViewURL/www/xzWebViewURL.js",
        "id" : "com.tongban.xzWebViewURL.xzWebViewURL",
        "clobbers":[
            "xzWebViewURL"
        ]
    },
    {
        "file" : "plugins/com.tongban.xzBxPassword/www/xzBxPassword.js",
        "id" : "com.tongban.xzBxPassword.xzBxPassword",
        "clobbers":[
            "xzBxPassword"
        ]
    },
    {
        "file" : "plugins/com.tongban.xzLocation/www/xzLocation.js",
        "id" : "com.tongban.xzLocation.xzLocation",
        "clobbers":[
            "xzLocation"
        ]
    },
    {
        "file" : "plugins/com.tongban.xzImage/www/xzImage.js",
        "id" : "com.tongban.xzImage.xzImage",
        "clobbers":[
            "xzImage"
        ]
    },
    {
            "file" : "plugins/com.tongban.xzUser/www/xzUser.js",
            "id" : "com.tongban.xzUser.xzUser",
            "clobbers":[
                "xzUser"
            ]
    },
    {
        "file" : "plugins/com.tongban.xzWindows/www/xzWindows.js",
        "id" : "com.tongban.xzWindows.xzWindows",
        "clobbers":[
            "xzWindows"
        ]
    },
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/nl.x-services.plugins.toast/www/Toast.js",
        "id": "nl.x-services.plugins.toast.Toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.toast/test/tests.js",
        "id": "nl.x-services.plugins.toast.tests"
    },
    {
        "file": "plugins/uk.co.whiteoctober.cordova.appversion/www/AppVersionPlugin.js",
        "id": "uk.co.whiteoctober.cordova.appversion.AppVersionPlugin",
        "clobbers": [
            "cordova.getAppVersion"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryEntry.js",
        "id": "org.apache.cordova.file.DirectoryEntry",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryReader.js",
        "id": "org.apache.cordova.file.DirectoryReader",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Entry.js",
        "id": "org.apache.cordova.file.Entry",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/File.js",
        "id": "org.apache.cordova.file.File",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileEntry.js",
        "id": "org.apache.cordova.file.FileEntry",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileError.js",
        "id": "org.apache.cordova.file.FileError",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileReader.js",
        "id": "org.apache.cordova.file.FileReader",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileSystem.js",
        "id": "org.apache.cordova.file.FileSystem",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadOptions.js",
        "id": "org.apache.cordova.file.FileUploadOptions",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadResult.js",
        "id": "org.apache.cordova.file.FileUploadResult",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileWriter.js",
        "id": "org.apache.cordova.file.FileWriter",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Flags.js",
        "id": "org.apache.cordova.file.Flags",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/LocalFileSystem.js",
        "id": "org.apache.cordova.file.LocalFileSystem",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Metadata.js",
        "id": "org.apache.cordova.file.Metadata",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/ProgressEvent.js",
        "id": "org.apache.cordova.file.ProgressEvent",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystems.js",
        "id": "org.apache.cordova.file.fileSystems"
    },
    {
        "file": "plugins/org.apache.cordova.file/www/requestFileSystem.js",
        "id": "org.apache.cordova.file.requestFileSystem",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/resolveLocalFileSystemURI.js",
        "id": "org.apache.cordova.file.resolveLocalFileSystemURI",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/android/FileSystem.js",
        "id": "org.apache.cordova.file.androidFileSystem",
        "merges": [
            "FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystems-roots.js",
        "id": "org.apache.cordova.file.fileSystems-roots",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystemPaths.js",
        "id": "org.apache.cordova.file.fileSystemPaths",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.file-transfer/www/FileTransferError.js",
        "id": "org.apache.cordova.file-transfer.FileTransferError",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file-transfer/www/FileTransfer.js",
        "id": "org.apache.cordova.file-transfer.FileTransfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "file": "plugins/io.github.pwlin.cordova.plugins.fileopener2/www/plugins.FileOpener2.js",
        "id": "io.github.pwlin.cordova.plugins.fileopener2.FileOpener2",
        "clobbers": [
            "cordova.plugins.fileOpener2"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/com.spout.phonegap.plugins.baidulocation/www/baidulocation.js",
        "id": "com.spout.phonegap.plugins.baidulocation.BiaduLocation",
        "clobbers": [
            "window.baiduLocation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
        "id": "cordova-plugin-screen-orientation.screenorientation",
        "clobbers": [
            "cordova.plugins.screenorientation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.android.js",
        "id": "cordova-plugin-screen-orientation.screenorientation.android",
        "merges": [
            "cordova.plugins.screenorientation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/com.synconset.imagepicker/www/imagepicker.js",
        "id": "com.synconset.imagepicker.ImagePicker",
        "clobbers": [
            "plugins.imagePicker"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova.DMQSoft.umengUpdate/www/umengUpdate.js",
        "id": "cordova.DMQSoft.umengUpdate.umengUpdate",
        "clobbers": [
            "window.plugins.umengUpdate"
        ]
    },
    {
        "file": "plugins/cn.jpush.phonegap.JPushPlugin/www/JPushPlugin.js",
        "id": "cn.jpush.phonegap.JPushPlugin.JPushPlugin",
        "clobbers": [
            "window.plugins.jPushPlugin"
        ]
    },
    {
        "file": "plugins/xu.li.cordova.wechat/www/wechat.js",
        "id": "xu.li.cordova.wechat.Wechat",
        "clobbers": [
            "Wechat"
        ]
    },
    {
        "file": "plugins/cordova-plugin-qqsdk/www/ycqq.js",
        "id": "cordova-plugin-qqsdk.ycqq",
        "clobbers": [
            "YCQQ"
        ]
    },
     {
         "file": "plugins/cordova-universal-clipboard/www/clipboard.js",
         "id": "cordova-universal-clipboard.Clipboard",
         "clobbers": [
             "clipboard"
         ]
     },
     {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{   "com.ash.rongCloudPlugin": "1.0.0",
    "com.ash.numberOfMsg": "1.0.0",
    "cordova-plugin-chcp": "1.0.0",
    "com.tongban.xzBxPassword":"1.0.1",
    "com.tongban.xzLocation":"1.0.1",
    "com.tongban.xzImage":"1.0.1",
    "com.tongban.xzUser":"1.0.1",
    "com.tongban.xzWindows":"1.0.1",
    "com.ionic.keyboard": "1.0.4",
    "cordova-plugin-console": "1.0.0",
    "cordova-plugin-device": "1.0.0",
    "cordova-plugin-splashscreen": "2.0.0",
    "cordova-plugin-whitelist": "1.0.0",
    "nl.x-services.plugins.toast": "2.0.6",
    "uk.co.whiteoctober.cordova.appversion": "0.1.7",
    "org.apache.cordova.file": "1.3.3",
    "org.apache.cordova.file-transfer": "0.5.0",
    "io.github.pwlin.cordova.plugins.fileopener2": "1.0.11",
    "cordova-plugin-network-information": "1.0.0",
    "com.spout.phonegap.plugins.baidulocation": "0.1.0",
    "cordova-plugin-screen-orientation": "1.3.6",
    "cordova-plugin-camera": "1.2.0",
    "com.synconset.imagepicker": "1.0.6",
    "cordova-plugin-statusbar": "1.0.1",
    "cordova.DMQSoft.umengUpdate": "1.0.0",
    "cn.jpush.phonegap.JPushPlugin": "2.0.2",
    "cordova-plugin-crosswalk-webview": "1.3.1",
    "xu.li.cordova.wechat": "0.9.1",
    "cordova-plugin-qqsdk": "0.3.8",
    "cordova-universal-clipboard": "0.1.0",
    "cordova-plugin-inappbrowser": "1.6.1"
}
// BOTTOM OF METADATA
});
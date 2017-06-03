myApp.controller("personCtrl", function($scope, appMain, $state, $ionicSlideBoxDelegate, $rootScope) {/*** Created by Administrator on 2017/5/18.*/
$(document).ready(function(){
          $('#qr_gen').click(function()
         {
            $('#qr_container').qrcode({render:"canvas",height:120, width:120,correctLevel:0,text:$('#qr_link').val()});
           });
         });

})
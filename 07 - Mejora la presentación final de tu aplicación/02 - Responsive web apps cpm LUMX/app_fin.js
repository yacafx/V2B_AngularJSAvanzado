angular
.module('myApp', [
        'lumx'
    ])
.controller('ctrlContacto', function($scope, LxNotificationService){
	  $scope.notificar = function(){
	         LxNotificationService.success('Registro Enviado')
        }
});
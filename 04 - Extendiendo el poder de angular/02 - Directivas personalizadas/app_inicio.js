angular.module('myApp', [])
    .controller('ctrlMiDirectiva', function($scope) {

    })
  	.directive('elUsuario', function(){
  		return{
  			template: 'Nombre: {{usuario.nombre}} <br /> Apellidos: {{usuario.apellidos}}'
  		}
  	})
angular.module('myApp', ['ngAnimate', 'pascalprecht.translate'])
.config(function($translateProvider){
	$translateProvider.translations('en', {
    	ADD: 'Add',
    	DELETE: 'Delete',
    	LIST: 'Product list'
  })
  .translations('es', {
    	ADD: 'Agregar',
    	DELETE: 'Eliminar',
    	LIST: 'Lista de productos'
  });
  $translateProvider.preferredLanguage('es');
})
.controller('ctrlTraduce', function($scope, $translate){
	$scope.listaProductos = [
		{nombre:'manzanas'},
		{nombre:'peras'},
		{nombre:'zanahorias'}
	];

	$scope.agregarProducto = function(){
		$scope.listaProductos.push({
			nombre: $scope.producto
		});
		 $scope.producto = '';
	}

	$scope.eliminarProducto = function(){
		$scope.listaProductos.pop();
	}

	$scope.cambiarIdioma = function (idioma) {
    	$translate.use(idioma);
  };
})
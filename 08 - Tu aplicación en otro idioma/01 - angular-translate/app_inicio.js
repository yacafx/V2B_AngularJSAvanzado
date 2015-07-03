angular.module('myApp', ['ngAnimate'])
.controller('ctrlTraduce', function($scope){
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
})
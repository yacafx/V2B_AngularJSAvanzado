angular.module('myApp', ['ngAnimate', 'firebase'])
    .controller('ctrlFire', function($scope, $firebaseArray) {

       var ref = new Firebase("https://tienda.firebaseio.com/");

        $scope.listaProductos = $firebaseArray(ref);

        $scope.agregarProducto = function() {
            $scope.listaProductos.$add({nombre: $scope.producto})
            $scope.producto = '';
        }

        $scope.eliminarProducto = function() {
            var total = $scope.listaProductos.length;
            var registro = $scope.listaProductos[total-1];
            //console.log(total, id, $scope.listaProductos[total-1])
            $scope.listaProductos.$remove(registro);
        }
    })

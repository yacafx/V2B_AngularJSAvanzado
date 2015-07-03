angular.module('myApp', ['ngAnimate'])
    .controller('ctrlAnimate', function($scope, $http) {
        $httpProvider.defaults.cache = false;

        var cache = $cacheFactory('myCache');

        var data = cache.get(idDeLaLlave);

        $http.get('productos.json', {cache:true})
            .then(function(res) {
                $scope.listaProductos = res.data;
            });

        $scope.agregarProducto = function() {
            $scope.listaProductos.push({
                nombre: $scope.producto
            });

            $scope.producto = '';
        }

        $scope.eliminarProducto = function() {
            $scope.listaProductos.pop();
        }

        $scope.obtenerClima = function() {
            var url = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22santo%20domingo%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
            $http.get(url)
                .then(function(res) {
                    $scope.clima = res.data.query.results.channel.item.condition;
                    console.log(res.data.query.results.channel.item.condition);
                });
        }
    })

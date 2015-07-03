angular.module('formlyApp', ['formly', 'formlyBootstrap'])
    .controller('ctrlRegistro', function($scope) {
        var cr = this;
        
        cr.usuario = {};

        cr.datosUsuario = [{
            key: 'nombreCompleto',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Nombre completo',
                placeholder: 'Escribe tu nombre completo',
                required: true
            }
        }, {
            key: 'correo',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'Correo electrónico',
                placeholder: 'Escribe tu correo',
                required: true
            }
        }, {
            key: 'masInfo',
            type: 'checkbox',
            templateOptions: {
                label: '¿Deseas recibir más información?',
            },
        }];

    });
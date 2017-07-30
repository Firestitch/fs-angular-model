(function () {
    'use strict';

    angular.module('fs-angular-model',[])
    .directive('fsModel', function($location) {
        return {
            templateUrl: 'views/directives/template.html',
            restrict: 'E',
            transclude: true,
            scope: {
               selected: "@fsSelected"
            },
            link: function($scope, element, attrs) {

            }
        };
    });
})();
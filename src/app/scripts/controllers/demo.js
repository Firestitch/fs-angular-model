'use strict';


angular.module('app')
.controller('DemoCtrl', function ($scope) {

    $scope.model = '';

    $scope.$watch('model',function(model) {
    	debugger;
    });

    $scope.raw = function() {
    	$scope.model = 'raw';
    }

})
.directive('directive',function($timeout) {
	return {
		restrict: 'A',
		require: '^fsModel',
		link: function ($scope, element, attr, ctrl) {
			ctrl.render = function() {
				var x = ctrl;
				var s = this;
			}

			$timeout(function() {
				ctrl.value = 'ssssss';
				ctrl.commit();
			},2000);
		}
    }
});


(function () {
    'use strict';

	fsModel.$inject = ['$scope', '$attrs', '$parse'];
	function fsModel($scope, $attr, $parse) {
		this.value = Number.NaN;
		this.$attr = $attr;
		this.$scope = $scope;
		this.$parse = $parse;

		var self = this;
		$scope.$watch(function() {

			var value = self.get();

			if (value !== self.value) {
			  	self.value = value;
			  	self.render();
			}

			return value;
	  	});
	};

	fsModel.prototype = {
	    get: function() {
	        return this.$parse(this.$attr.fsModel)(this.$scope);
	    },
	    set: function(value) {
	        this.$parse(this.$attr.fsModel).assign(this.$scope, value);
	    },
	    render: function() {},
	    commit: function() {
	    	this.set(this.value);
	    }
	};

	angular.module('fs-angular-model',[])
	.directive('fsModel',function() {
		return {
			restrict: 'A',
			controller: fsModel,
			priority: 1,
			link: function ($scope, element, attr, ctrls) {

			}
        }
	});
})();

angular.module('fs-angular-model').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/directives/template.html',
    "fs-angular template"
  );

}]);

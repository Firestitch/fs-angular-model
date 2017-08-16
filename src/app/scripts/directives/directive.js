(function () {
    'use strict';

	fsModel.$inject = ['$scope', '$attrs', '$parse'];
	function fsModel($scope, $attr, $parse) {

		this.$attr = $attr;
		this.$scope = $scope;
		this.$parse = $parse;
		this.modelValue = NaN;
		this.viewValue = NaN;

		var self = this;

		$scope.$watch(function() {

			var value = self.get();

			if(value!==self.modelValue) {

				if(typeof moment !== 'undefined' && moment.isMoment(value) && moment.isMoment(self.value) && value.isSame(self.value)) {
					return value;
				}

				self.modelValue = value;
				self.viewValue = value;
				self.watch(value);
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
	    watch: function(value) {},
	    commit: function() {
	    	this.set(this.viewValue);
	    	this.modelValue = this.viewValue;
	    },
	    value: function(value) {
	    	if(!arguments.length) {
	    		return this.viewValue;
	    	}
	    	this.viewValue = value;
	    }
	};

	angular.module('fs-angular-model',[])
	.directive('fsModel',function() {
		return {
			restrict: 'A',
			controller: fsModel,
			priority: 1
        }
	});
})();

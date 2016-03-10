	"use strict";

var app = angular.module('store');

	app.directive('productTitle', function(){
		return{
			restrict: 'EA',
			templateUrl: 'product-title.html'
		}
	})
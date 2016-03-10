"use strict";

var app = angular.module('store');

	app.controller('StoreCtrl', function($scope){
		$scope.test = "testerino";
		this.products = gems;
	});

	app.controller('TabCtrl', function($scope){
		// initialize value of tab so that some info shows on page load;
		this.tab = 1; 
		// change value of tab to selected tab;
		this.selectedTab = function(tab){
			this.tab = tab;
		}
		// change ng class of selected tab
		this.isSelected = function(tab){
			return this.tab === tab; 
		}
	});

	app.controller('GalleryCtrl', function($scope){
		this.current = 0; 
		this.setCurrent = function(image){
			this.current = image || 0; 
		}
	});

	app.controller("ReviewCtrl", function($scope){
		this.review ={};
		this.addReview = function(product){
			console.log($scope.reviewCtrl.review.stars, "SCOPE")
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		}
	});

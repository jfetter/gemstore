	"use strict";

var app = angular.module('store');

	app.directive('productDescription', function(){
		return{
			restrict: 'EA',
			templateUrl: 'directives/product-descript.html'
		}
	})

	app.directive('productSpecs', function(){
		return{
			restrict: 'EA',
			templateUrl: 'directives/product-specs.html'
		}
	})	

	app.directive('productReviews', function(){
		return{
			restrict: 'EA',
			templateUrl: 'directives/product-reviews.html'
		}
	})

	app.directive('tabDisplay', function(){
		return{
			restrict: 'EA',
			templateUrl: 'directives/tab-display.html'
		}
	})	

	app.directive('reviewForm', function(){
		return{
			restrict: 'EA',
			templateUrl: 'directives/review-form.html',
			controller: function(){
				this.review ={};
				this.addReview = function(product){
					console.log($scope.reviewCtrl.review.stars, "SCOPE")
					this.review.createdOn = Date.now();
					product.reviews.push(this.review);
					this.review = {};
				}
			},
			controllerAs: "reviewCtrl"
		}
	})	

	app.directive('imageGallery', function(){
		return{
			restrict: 'EA',
			templateUrl: 'directives/image-gallery.html',
			controller: function(){
				this.current = 0; 
				this.setCurrent = function(image){
					this.current = image || 0; 
				}
			},
			controllerAs: "gallery"
		};
	})

	app.directive('infoPanels', function(){
		return{
			restrict: 'EA',
			templateUrl: 'directives/info-panels.html',
			controller: function(){
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
			},
			controllerAs: "tab"
		}
	})



	"use strict";

var app = angular.module('stoto');

	
	app.directive('imageGallery', function($templateCache){
		return{
			restrict: 'EA',
			template: $templateCache.get('story-gallery'),
			controller: function(){
				this.current = 0; 
				this.setCurrent = function(image){
					this.current = image || 0; 
				}
			},
			controllerAs: "gallery"
		};
	})

	app.directive('storyDescript', function($templateCache){
		return{
			restrict: 'EA',
			template: $templateCache.get('story-descript')
		}
	})

	app.directive('storySpecs', function($templateCache){
		return{
			restrict: 'EA',
			template: $templateCache.get('story-specs')
		}
	})	

	app.directive('picSummary', function(){
		return{
			restrict: 'EA',
			template: $templateCache.get('pic-summary')
		}
	})

	app.directive('tabDisplay', function($templateCache){
		return{
			restrict: 'EA',
			template: $templateCache.get('tab-display')
		}
	})	

	app.directive('picForm', function($templateCache){
		return{
			restrict: 'EA',
			template: $templateCache.get('pic-form'),
			controller: function(){
				this.pic ={};
				this.addPic = function(story){
					console.log($scope.newPic.pic.place, "SCOPE")
					this.pic.date = this.pic.date || Date.now();
					story.pics.push(this.pic);
					PicService.addPic(this.pic);
					this.pic = {};
				}
			},
			controllerAs: "newPic"
		}
	})	

	app.directive('infoPanels', function($templateCache){
		return{
			restrict: 'EA',
			template: $templateCache.get('info-panels'),
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



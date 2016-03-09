"use strict";

(function(){
	var app = angular.module('store', []);

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
	var gems = [
	{ name: 'Bloodstone',
	description: "origin unkown; very lusterous",
	shine: 9, 
	price: 22.90,
	rarity: 6, 
	color: '#EEE', 
	faces: 12,
	images: [
	"images/gem-01.png",
	"images/gem-03.png",
	"images/gem-04.png"
	],reviews: [{
		stars: 3, 
		body:"I think this gem was just OK, could use more shine IMO",
		author: "jimmyDean@example.org",
		createdOn: 1397490980837
	},
	{
		stars: 4, 
		body:"12 faces are better than two!",
		author: "gemsRock@example.org",
		createdOn: 1397490980837
	}]},{
	name: 'Azurite',
	description: "most coveted and sought after gem, pricey!",
	shine: 70, 
	price: 1100,
	rarity: 2, 
	color: '#000', 
	faces: 6,
	images: [
	"images/gem-09.png",
	"images/gem-05.png",
	"images/gem-02.png"
	],reviews: [{
		stars: 3, 
		body:"Waaaay too expensive for its rarity value.",
		author: "turtleguyy@example.org",
		createdOn: 1397490980837
	},
	{stars: 1, 
		body:"lame",
		author: "LouisW407@example.org",
		createdOn: 1397490980837
	},
	{stars: 1, 
		body:"save your money",
		author: "bob@example.org",
		createdOn: 1397490980837
		}]
	}];
})();


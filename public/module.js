"use strict";

//(function(){
	var app = angular.module('stoto', []);

// app.run(function($templateCache){
// 	console.log($templateCache.get('product-specs'))
// })


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
//})
//();


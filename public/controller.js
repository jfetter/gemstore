"use strict";

var app = angular.module('stoto');


	app.controller('StoryCtrl', function($scope, $rootScope, $http){
		// this.test = "testerino";
		// this.incramentNo = function(){
		// 	var count = 0; 
		// 	return function(){
		// 		count ++;
		// 	 return count; 
		// 	}();
		// }
		// console.log(this.incramentNo(), "incrament")
		var contactInfo = {
			email: "jillian.fetter@gmail.com",
			fname: "Jillian",
			lname: "Fetter"
		}
		//this.products = gems;

			$http.post("/users/mailgun" ,contactInfo)
			.then(function(res){
				console.log(res.data)
			}, function(err){
				console.log(err)
			})
	});


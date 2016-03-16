'use strict';

angular.module('stoto')

.service('picSrvc', function($http){
	var myId; 
	
	// if not using es6 set this equal to a variable and 
	// use nested properties as variable.property as you 
	// would this.property

	//var store = this; 
	this.storedPics = [];

	let getPics = () => $http.get('/pics/' + myId)
//export this to controller;
	// .then(res.data => {
	//  	this.myPics = 
	//  }, (err => {
	//  	console.error(err)
	//  })

	this.checkForPics = () =>{
		console.log(this.storedPics);
		this.storedPics.length ? this.storedPics : this.getPics();
	};

})
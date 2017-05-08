'use strict'

var myApp = require("../lib/getPrimes.js")

describe("Get prime tests",function(){

	it("should return [2,3] for 3",function(){
		expect(myApp.getPrimes(3)).toEqual([2,3]);
	});

	it("should return [2,3,5] for 6",function(){
		expect(myApp.getPrimes(6)).toEqual([2,3,5]);
	});
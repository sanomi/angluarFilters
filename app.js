'use strict';

angular.module('test', [])
.controller('testCtrl', function($scope, curses, $filter) {
	$scope.add = function(word) {
		curses.push(word);
		$scope.thing = $filter('censor')($scope.thing);
	}
})

.value('curses', ['shit','fuck','ass'])
.filter('censor', function(curses){
	return function(input) {
		if(!input) {return}
		let inputArr = input.split(' ');
		inputArr= inputArr.map(function(i){
			if(curses.indexOf(i) !==-1) {
				return i.replace(/\w/g, '*')
			} else {
				return i;
			}
		})
		return inputArr.join(' ');
	}

})
.filter('bacon', function(){
	return function(input) {
		if ((/bacon/).test(input)) {
			return input.replace(/bacon/g, 'BACON');
		} else {
			return input;
		}
	}
})
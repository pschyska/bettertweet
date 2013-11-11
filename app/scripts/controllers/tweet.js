'use strict';

angular.module('bettertweetApp')
  .controller('TweetCtrl', function ($scope, $routeParams, Tweet) {
  	$scope.tweet = { donation_token: $routeParams.donation_token };

  	$scope.submitTweet = function() {
		console.log('submitrting');
		Tweet.submit($scope.tweet, function() { console.log(arguments); });
  	}
    
  });
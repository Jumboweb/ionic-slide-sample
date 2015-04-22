angular.module('starter.controllers', [])

.controller('SlideCtrl', function($scope, $ionicModal) {

  $scope.gotPictures = [
    {
      'src' : 'img/baratheon.jpg'
    },
    {
	    'src' : 'img/bolton.jpg'
	  },
    {
	    'src' : 'img/lannister.jpg'
    },
    {
	    'src' : 'img/stark.jpg'
    },
    {
	    'src' : 'img/targaryen.jpg'
    },
    {
	    'src' : 'img/valar-morghulis.jpg'
    }
  ];

  $scope.avengersPictures = [
    {
      'src' : 'img/hulk.jpg'
    },
    {
	    'src' : 'img/ironman.jpeg'
	  },
    {
	    'src' : 'img/thor.jpg'
    },
    {
	    'src' : 'img/captainamerica.jpg'
    }
  ];
});

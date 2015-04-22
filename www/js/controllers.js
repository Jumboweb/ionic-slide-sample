angular.module('starter.controllers', [])

.controller('SlideCtrl', function($scope, $ionicModal) {

  $scope.allPictures = [
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
});

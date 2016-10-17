(function() {
  'use strict';
  console.log('posts!');

  const app = angular.module('ffReddit');

  app.controller('postController', function($rootScope) {

    $rootScope.posts = [
      {
        id: 1,
        image: 'http://ww1.hdnux.com/photos/53/55/21/11457648/3/727x0.jpg',
        author: 'LittleJerry',
        title: 'Lamar Miller: Beast Mode',
        text: 'Finally the high draft pick pays off...just won my match up after getting a fat zero from Sammie Coates.',
        votes: 0,
        comments: []
      }
    ];

  });

}());

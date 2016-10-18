(function() {
  'use strict';

    const app = angular.module('ffReddit');

    app.controller('voteController', function($rootScope) {

      this.add = function(post) {
        post.votes++;
      };

      this.subtract = function(post) {
        post.votes--;
      };

    });

}());

const app = angular.module('ffReddit');

app.controller('newPostController', function($rootScope) {

  this.submit = function(form) {
    let newPost = {};
    newPost.id = ($rootScope.posts.length + 1);
    newPost.title = this.title;
    newPost.author = this.author;
    newPost.image = this.image;
    newPost.text = this.text;
    newPost.comments = [];
    newPost.votes = 0;
    newPost.date = new Date();

    $rootScope.posts.push(newPost);

    this.title = '';
    this.author = '';
    this.image = '';
    this.text = '';
    form.$setPristine();
    form.$setUntouched();
    this.showPostForm = false;
  };


});

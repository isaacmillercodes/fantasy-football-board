(function() {
  'use strict';

    const app = angular.module('ffReddit');

    app.controller('sortController', function($rootScope) {

      this.filter = '-votes';

      this.setSort = (order, filter) => {
        let operator = '';
        if (order === 'descending') {
          operator = '-';
        } else {
          operator = '+';
        }
        this.filter = operator + filter;
      };

    });

}());

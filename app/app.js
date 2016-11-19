/*
* @Author: 虚竹
* @Date:   2016-09-26 13:30:48
* @Last Modified by:   jingyun
* @Last Modified time: 2016-10-16 16:38:09
*/



;(function() {
	'use strict';

  /**
   * Definition of the main app module and its dependencies
   */
  angular.module('renren', ['ngRoute'])
    .config([
    	'$routeProvider', 
    	'$locationProvider', 
    	'$httpProvider', 
    	'$compileProvider', 
    	function($routeProvider) {

			$routeProvider
			.when('/daohang', {
				templateUrl: '../views/daohang/view.html',
				controller: 'daohangController'
			})
			.when('/gundong', {
				templateUrl: '../views/gundong/view.html',
				controller: 'gundongController'
			})
			.when('/sliphover', {
				templateUrl: '../views/sliphover/view.html',
				controller: 'sliphoverController'
			})
			.otherwise({
				redirectTo: '/daohang'
			});

    }]);

 
})();
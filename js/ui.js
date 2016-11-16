
var appui = angular.module('appui',[])
appui.config(function($stateProvider,$urlRouterProvider){
		
		$urlRouterProvider.otherwise('login');
		
		$stateProvider.state('login',{
			url:'/login',
			templateUrl:'template/login.html'
		})
		
		.state('show',{
			url:'/show',
			templateUrl:'template/show.html'
			
		})
		.state('info',{
			url:'/info',
			templateUrl:'template/info.html'
		})
		
	})
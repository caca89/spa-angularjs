angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', 
    function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

		$urlRouterProvider.otherwise('/');

		$ocLazyLoadProvider.config({
			// Set to true if you want to see what and when is dynamically loaded
			debug: true
 		});
		var v = Date.now();
    	$stateProvider
    	.state('/', {
		    url: '/',
		    templateUrl: 'views/page.html?v='+v,
		    resolve: {
		      	loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
			        return $ocLazyLoad.load({
			          	files: ['app/controllers/pageCtrl.js?v='+v]
			        });
		      	}]
    		}
    	})
    	.state('app', {
    		abstract: true,
    		templateUrl: 'views/layout.html?v='+v
    	})
    	.state('app.home', {
		    url: '/home',
		    templateUrl: 'views/pages/home/home.html?v='+v,
		    resolve: {
		      	loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
			        return $ocLazyLoad.load({
			          	files: ['app/controllers/homeCtrl.js?v='+v]
			        });
		      	}]
    		}
    	})
    	.state('app.login', {
		    url: '/login',
		    templateUrl: 'views/pages/auth/login.html?v='+v,
		    resolve: {
		      	loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
			        return $ocLazyLoad.load({
			          	files: ['app/controllers/loginCtrl.js?v='+v]
			        });
		      	}]
    		}
    	})
    	.state('app.register', {
		    url: '/register',
		    templateUrl: 'views/pages/auth/register.html?v='+v,
		    resolve: {
		      	loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
			        return $ocLazyLoad.load({
			          	files: ['app/controllers/registerCtrl.js?v='+v]
			        });
		      	}]
    		}
    	})
    	.state('app.detail', {
		    url: '/detail/:sId',
		    templateUrl: 'views/pages/home/detail.html?v='+v,
		    resolve: {
		      	loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
			        return $ocLazyLoad.load({
			          	files: ['app/controllers/detailCtrl.js?v='+v]
			        });
		      	}]
    		}
    	})
    }
])
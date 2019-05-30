angular
.module('app', [
    'ui.router',
    'ngSanitize',
    'oc.lazyLoad'
])
.run(['$rootScope', '$location', 
    function($rootScope, $location) {
        $rootScope.$on('$locationChangeStart', function(evt) {
	        var path = $location.path();
	    	var logged_in = localStorage.app_logged_in || 0;
		    if(logged_in) {
		      	if(path == '/login' || path == '/' || path == '/register') {
		          	$location.path("/home");
		          	window.location = '#!/home';
		      	}
		    } else {
		    	delete localStorage.app_logged_in;
		      	if(path == '/home') {
		          	$location.path("/");
		          	window.location = '#!/';
		      	}
		    }
	    })
	}
])
.config(['$httpProvider', function($httpProvider) {
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])
angular
.module('app')
.controller('loginCtrl', loginCtrl);

loginCtrl.$inject = ['$scope', '$http', '$location'];
function loginCtrl($scope, $http, $location) {
	$scope.doLogin = function(data) {
		$http({
	        method: 'POST',
	        url: 'api/login.php',
	        data: data
	    }).then(function(response) {
	    	var obj = response.data;
	    	if(obj.status=='success') {
	    		localStorage.app_logged_in = 1;
	    		$location.path('/home');
      			window.location = '#!/home';
	    	} else {
	    		alert(obj.message);
	    	}
	    }).catch(function(response){
	    	console.log(response);
	    });
	}
}
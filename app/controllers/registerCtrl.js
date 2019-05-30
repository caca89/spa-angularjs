angular
.module('app')
.controller('registerCtrl', registerCtrl)
.filter('onlyNumber', function() {
    return function (number) {
    }
})

registerCtrl.$inject = ['$scope', '$rootScope', '$timeout', '$http'];
function registerCtrl($scope, $rootScope, $timeout, $http) {
	$scope.register = {};
	$scope.tab_active = "general";
	$scope.saveGeneral = function(register) {
		$scope.tab_active = "contact";
		console.log($scope.register);
	}
	$scope.saveContact = function(register) {
		$scope.tab_active = "password";
		console.log($scope.register);
	}
	$scope.savePassword = function(register) {
		delete register.confirm_password;
		$http({
	        method: 'POST',
	        url: 'api/register.php',
	        data: register
	    }).then(function(response) {
	    	console.log(response.data);
	    }).catch(function(response){
	    	console.log(response);
	    });
		$scope.tab_active = "success";
	}
}

function functOnlyNumber(number) {
    if(number != null) {
        value =  number=='' ? parseFloat(0, 10) : parseFloat(number);
        return number;
    }
}
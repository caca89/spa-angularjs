angular
.module('app')
.controller('homeCtrl', homeCtrl);

homeCtrl.$inject = ['$scope', '$location', '$http', '$sce'];
function homeCtrl($scope, $location, $http, $sce) {
	$http({
        method: 'GET',
        // responseType: 'document',
        // url: 'api/home.php'
        url: 'https://m.bnizona.com/promo/index/21'
    }).then(function(response) {
    	var a = response.data.split('<ul class="list2" id="lists">');
    	var a1 = a[1] || '';
    	var b = a1.split('</ul>');
    	var b1 = b[0] || '';
    	var c = b1.replace('<a', '<a ng-click="goDetail()"');
    	c = c.replace('<a', '<a ng-click="goDetail()"');
    	c = c.replace('<a', '<a ng-click="goDetail()"');
    	c = c.replace('<a', '<a ng-click="goDetail()"');
    	c = c.replace('href="https://m.bnizona.com/promo/view/0/', 'href="http://localhost/irsyad-syahr.com/test/example_1/#!/detail/');
    	c = c.replace('href="https://m.bnizona.com/promo/view/0/', 'href="http://localhost/irsyad-syahr.com/test/example_1/#!/detail/');
    	c = c.replace('href="https://m.bnizona.com/promo/view/0/', 'href="http://localhost/irsyad-syahr.com/test/example_1/#!/detail/');
    	c = c.replace('href="https://m.bnizona.com/promo/view/0/', 'href="http://localhost/irsyad-syahr.com/test/example_1/#!/detail/');
    	var html = $sce.trustAsHtml(c);
    	$scope.promos = html;
    },function(response){
    });

	$scope.doLogout = function() {
		delete localStorage.app_logged_in;
      	$location.path("/");
      	window.location = '#!/';
	}
	$scope.goDetail = function() {
		console.log('test');
	}
}
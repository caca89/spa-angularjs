angular
.module('app')
.controller('detailCtrl', detailCtrl);

detailCtrl.$inject = ['$scope', '$location', '$http', '$sce', '$stateParams'];
function detailCtrl($scope, $location, $http, $sce, $stateParams) {
    var id = $stateParams.sId;
    console.log(id);
	$http({
        method: 'GET',
        url: 'https://m.bnizona.com/promo/view/0/'+id
    }).then(function(response) {
    	var a = response.data.split('<div class="title"><ul class="breadcrumbs"><li><a href="https://m.bnizona.com/">Home</a></li><li class="unavailable"><a href="https://m.bnizona.com/category/index/promo">Promo BNI</a></li></ul></div>');
    	var a1 = a[1] || '';
    	var b = a1.split('<footer class="twelve columns fullscreen">');
    	var b1 = b[0] || '';
        var c = b1.split('<div class="share" style="padding: 20px">');
        var c1 = c[0] || '';
    	var html = $sce.trustAsHtml(c1);
    	$scope.details = html;
    },function(response){
    });

	$scope.doLogout = function() {
		delete localStorage.app_logged_in;
      	$location.path("/");
      	window.location = '#!/';
	}
}
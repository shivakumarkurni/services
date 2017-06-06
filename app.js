var app=angular.module("myApp",[]);
app.controller("myController",["$scope","provider","productservice",function($scope,provider,productservice){
	$scope.message="hello world";
	$scope.data=provider.getName();
	$scope.productdata.getDellDetails();
	// $scope.data=$get();
}])
angular.module('app',[]).
controller('appCtrl',['$scope','$http',function($scope,$http){
  $scope.refresh=function(){
    $http.get('/contactlist').success(function(response){
      $scope.contactlist=response;
      $scope.contact='';
    });
  };
$scope.refresh();
$scope.addcontact=function(){
  console.log($scope.contact);
  $http.post('/contactlist',$scope.contact).success(function(response){
    console.log(response);
    $scope.refresh();

  }) ;
};
$scope.remove=function(id){
  console.log(id);
  $http.delete('/contactlist/'+id).success(function(response){
    $scope.refresh();
   })
};
$scope.edit=function(id){
  console.log(id);
  $http.get('/contactlist/' +id).success(function(response){
    $scope.contact=response;
  })
};
$scope.update=function(){
  console.log($scope.contact._id);
  $http.put('/contactlist/' +$scope.contact._id,$scope.contact)
  $scope.refresh();
};
$scope.clear=function(){
  $scope.contact='';
}

}]);

angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.showForm = false;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addButton = function(){
      $scope.showForm = true;
    };

    $scope.addListing = function(code, name, address, latitude,longitude) {
      $scope.listings.push({
        code: code,
        name: name,
        address:  address,
        coordinates: {
          latitude: latitude,
          longitude: longitude
        }
      });
      $scope.code = "";
      $scope.buildingName = ""; 
      $scope.address = "";
      $scope.latitude = "";
      $scope.longitude = ""; 
    };
    $scope.deleteListing = function(code) {
      for(i in $scope.listings) {
        if($scope.listings[i].code == code) {
          $scope.listings.splice(i, 1);
        }
      }
    };
    $scope.showDetails = function(code) {
      for(i in $scope.listings) {
        console.log($scope.listings[i]);
        if($scope.listings[i].code == code) {
          console.log($scope.listings[i])
          $scope.detailedInfo = $scope.listings[i];
        }
      }
    };
  }
]);
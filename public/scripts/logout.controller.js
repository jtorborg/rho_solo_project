angular.module('speechApp')
.controller('LogoutController', LogoutController);

function LogoutController($http, $location) {
  console.log('LogoutController loaded');
  var ctrl = this;

  ctrl.logout = function() {
    console.log('logging out');
    $http.get('/logout', {
    }).then(function(response){
      $location.path('/login')
      console.log(response);
    }, function(error) {
      console.log('error logging out', error);
    });
  };
}

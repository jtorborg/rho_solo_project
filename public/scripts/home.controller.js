angular.module('speechApp')
.controller('HomeController', HomeController);

function HomeController($http, $location) {
  console.log('HomeController loaded');
  var ctrl = this;

  ctrl.home = {
    console.log('inside ctrl home function');
  }

}

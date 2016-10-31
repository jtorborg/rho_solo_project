angular.module('speechApp')
.controller('HomeController', HomeController);

function HomeController($http, $location) {
  console.log('HomeController loaded');
  var ctrl = this;

  ctrl.home = {
    name: name
  }

}

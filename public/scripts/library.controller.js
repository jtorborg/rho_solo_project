angular.module('speechApp')
.controller('LibraryController', LibraryController);

function LibraryController($http, $location) {
  console.log('LibraryController loaded');
var ctrl = this;

ctrl.library = {
  name: name
}
//get request to /library
}

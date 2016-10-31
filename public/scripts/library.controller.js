angular.module('speechApp')
.controller('LibraryController', LibraryController);

function LibraryController($http, $location) {
  console.log('LibraryController loaded');
var ctrl = this;

ctrl.library = {
  console.log('inside ctrl library function');
}
//get request to /library 
}

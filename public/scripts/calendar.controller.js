angular.module('speechApp')
.controller('CalendarController', CalendarController);

function CalendarController($http, $location) {
  console.log('CalendarController loaded');
//call to Google calendar API



var _this = this;
_this.data = '';

// $http.get('/calendar/google')
//   .then(function (response) {
//     if (response.data.err) {
//       _this.data = 'Sorry, you are not logged in!';
//     } else {
//       _this.data = response.data.message;
//     }
//   });
}

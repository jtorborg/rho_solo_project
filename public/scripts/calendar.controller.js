angular.module('speechApp')
.controller('CalendarController', CalendarController);

function CalendarController($http, $location) {
  console.log('CalendarController loaded');
//call to Google calendar API



var _this = this;
_this.data = '';

// this.checkTime = function(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }
//
// this.startTime = function() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('txt').innerHTML =
//     h + ":" + m + ":" + s;
//     var t = setTimeout(startTime, 500);
// }


// $http.get('/calendar/google')
//   .then(function (response) {
//     if (response.data.err) {
//       _this.data = 'Sorry, you are not logged in!';
//     } else {
//       _this.data = response.data.message;
//     }
//   });
}

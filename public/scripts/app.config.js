// routing
angular.module('speechApp').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController as login'
  }).when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterController as register'
  }).when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController as home'
  }).when('/calendar', {
    templateUrl: 'views/calendar.html',
    controller: 'CalendarController as calendar'
  }).when('/intake', {
    templateUrl: 'views/intake.html',
    controller: 'IntakeController as intake'
  }).when('/library', {
    templateUrl: 'views/library.html',
    controller: 'LibraryController as library'
  }).when('/tests', {
    templateUrl: 'views/tests.html',
    controller: 'TestsController as tests'
  }).otherwise({
    redirectTo: "/calendar"
  });
});

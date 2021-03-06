// routing
angular.module('speechApp').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController as login'
  }).when('/logout', {
    templateUrl: 'views/logout.html',
    controller: 'LogoutController as logout'
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
  }).when('/roster', {
    templateUrl: 'views/roster.html',
    controller: 'RosterController as roster'
  }).when('/caseload', {
    templateUrl: 'views/caseload.html',
    controller: 'CaseloadController as caseload'
  }).otherwise({
    redirectTo: "/login"
  });
});

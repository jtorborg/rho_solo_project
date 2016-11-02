angular.module('speechApp').service('testsService', testsService);

var ctrl = this;

function testsService($http) {
  console.log('inside tests service');
  this.getTests = function() {
       return $http.get('/tests')
           .then(function(tests) {
             console.log('tests', tests);
               return tests;  //!!!!!!!!!!
           });

           

} //end of getTests
//testsService

}//end of testsService

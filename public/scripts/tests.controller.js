angular.module('speechApp')
.controller('TestsController', TestsController);

function TestsController(testsService) {
  var tests = this;
  console.log('TestsController loaded');
  tests.Object = {};
   tests.Array = [];
  //get request to /tests
  this.getTests = function() {
      console.log('inside getTests');

      testsService.getTests().then(function(response) {
        console.log("response", response);;

        tests.Object = response;
        tests.Array = response.data;
        console.log("tests array", tests.Array);
      });

  }


}

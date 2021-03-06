angular.module('speechApp')
    .controller('TestsController', TestsController);

function TestsController(testsService) {
    var tests = this;
    console.log('TestsController loaded');
    tests.Object = {};
    tests.Array = [];
    tests.appropriateTest = true;

    //get request to /tests
    this.getTests = function() {
        console.log('inside getTests');

        testsService.getTests(tests.age, tests.primarylanguage, tests.concern).then(function(response) {
                console.log("response", response);;
                console.log(tests.age);
                console.log(tests.primarylanguage);
                console.log(tests.concern);


                tests.Object = response;
                console.log('tests object', tests.Object);
                tests.Array = response.data;
                console.log("tests array", tests.Array);
                    if (tests.Array.length === 0) {
                        tests.appropriateTest = false;
                    } else {
                        tests.appropriateTest = true;
                    }
                    console.log("tests.appropriateTest", tests.appropriateTest);

                  })
                };
    }

angular.module('speechApp')
    .controller('CaseloadController', CaseloadController);

function CaseloadController(caseloadService) {
    console.log('CaseloadController loaded');
    var caseload = this;

    caseload.Object = {};
    caseload.Array = [];

    this.getStudents = function() {
        console.log('inside getStudents');
        caseloadService.getStudents().then(function(response) {
            console.log("response from get students", response);
            caseload.Array = response.data;
            console.log("caseload array", caseload.Array);

        });
    }; //end of getStudents

}

this.calcDateDiff = function(lastpoc) {
//
     console.log('inside calc date diff');
     console.log('lastpoc', lastpoc);
//     var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
//     var firstDate = new Date();
//     var secondDate = new Date(2008, 01, 22);
//     var diffDays = Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay));
//     console.log(diffDays);
 }

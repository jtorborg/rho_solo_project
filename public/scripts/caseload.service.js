angular.module('speechApp').service('caseloadService', caseloadService);

var caseload = this;

function caseloadService($http) {


console.log('inside caseload service');

this.getStudents = function() {//pass your data!!!
//send post to route; route will send to database
     return $http.get('/caseload')
         .then(function(students) {
           console.log('students', students);
             return students;  //!!!!!!!!!!
         });

} //end of getStudents

}

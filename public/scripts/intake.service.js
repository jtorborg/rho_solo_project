angular.module('speechApp').service('intakeService', intakeService);

var intake = this;

function intakeService($http) {//pass in built-in $http; this is a privately scope
  this.postStudent = function(student) {//pass your data!!!
  //send post to route; route will send to database
       return $http.post('/intake', student)
           .then(function(student) {
               return student;  //!!!!!!!!!!
           });

} //end of postStudent

}//end of intakeService

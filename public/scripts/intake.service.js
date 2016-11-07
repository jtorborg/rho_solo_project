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

this.postConcerns = function(concerns) {//pass your data!!!
  console.log('concerns in service', concerns);
      return $http.post('/intake', concerns)
          .then(function(concerns) {
              return concerns;  //!!!!!!!!!!
          });

 } //end of postConcerns


 this.getStudents = function() {//pass your data!!!
 //send post to route; route will send to database
      return $http.get('/intake')
          .then(function(students) {
              return students;  //!!!!!!!!!!
          });

} //end of postStudent

}//end of intakeService

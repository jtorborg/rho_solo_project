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

} //end of getStudents



        this.updateStudent = function(modifiedStudent) {
          console.log('intake modified student,intakeid', modifiedStudent, modifiedStudent.id);
            return $http.put('/intake/' + modifiedStudent.id, modifiedStudent).then(function(status) {

                return modifiedStudent;
            });
}//end of update student

this.deleteStudent = function(id) {
  console.log('intake delete student');
console.log(id);
    return $http.delete('/intake/' + id).then(function(status) {

        return id;
    });
}//end of deleted student


}//end of intakeService

angular.module('speechApp').service('rosterService', rosterService);

var roster = this;


function rosterService($http) {

this.getStudents = function() {//pass your data!!!
//send post to route; route will send to database
     return $http.get('/roster')
         .then(function(students) {
           console.log('students', students);
             return students;  //!!!!!!!!!!
         });

} //end of getStudents



       this.updateStudent = function(modifiedStudent) {
         console.log('roster modified student,rosterid', modifiedStudent, modifiedStudent.id);
           return $http.put('/roster/' + modifiedStudent.id, modifiedStudent).then(function(status) {

               return modifiedStudent;
           });
}//end of update student

this.deleteStudent = function(id) {
 console.log('inside delete student');
console.log(id);
   return $http.delete('/roster/' + id).then(function(status) {

       return id;
   });
}//end of deleted student
}

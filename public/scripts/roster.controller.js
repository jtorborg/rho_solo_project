angular.module('speechApp')
    .controller('RosterController', RosterController);

function RosterController(rosterService) {
    console.log('rostercontroller loaded');
    var roster = this;
    roster.Object = {};
    roster.Array = [];

    this.getStudents = function() {
        console.log('inside getStudents');
        rosterService.getStudents().then(function(response) {
            console.log("response from get students", response);
            roster.Array = response.data;
            console.log("roster array", roster.Array);

        });
    }; //end of getStudents

    this.updateStudent = function(id, firstname, lastname, age, dob, doc, insurance, medical, appointment, appointmentcomplete, primarylanguage, notes, nowait) {

console.log('inside update student');
console.log("id", id);

 console.log('first name', firstname);
 console.log('primary lang', primarylanguage);
         roster.modifiedStudent = {
           id: id,
           firstname: firstname,
           lastname: lastname,
           age: age,
           dob: dob,
           doc: doc,
           insurance: insurance,
           medical: medical,
           appointment: appointment,
           appointmentcomplete: appointmentcomplete,
           primarylanguage: primarylanguage,
           notes: notes,
           nowait: nowait

       };
console.log('roster mod stud', roster.modifiedStudent);
      //  mondaymorning: mondaymorning,
      //  mondayafternoon: mondayafternoon,
      //  mondayevening: mondayevening,
      //  tuesdaymorning: tuesdaymorning,
      //  tuesdayafternoon: tuesdayafternoon,
      //  tuesdayevening: tuesdayevening,
      //  wednesdaymorning: wednesdaymorning,
      //  wednesdayafternoon: wednesdayafternoon,
      //  wednesdayevening: wednesdayafternoon,
      //  thursdaymorning: thursdaymorning,
      //  thursdayafternoon: thursdayafternoon,
      //  thursdayevening: thursdayevening,
      //  fridaymorning: fridaymorning,
      //  fridayafternoon: fridayafternoon,
      //  fridayevening: fridayevening
//
 console.log('roster modified student', roster.modifiedStudent);
        rosterService.updateStudent(roster.modifiedStudent).then(function(response) {

            console.log("response", response);
            roster.getStudents();

       });

    }//end of update student

    this.deleteStudent = function(id) {
        console.log('inside deleteStudents');
        console.log(id);
         rosterService.deleteStudent(id).then(function(response) {
             console.log("response from get students", response);
             roster.getStudents();

         });
    }; //end of getStudents


    }

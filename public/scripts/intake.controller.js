angular.module('speechApp')
    .controller('IntakeController', IntakeController);

function IntakeController(intakeService) {
    console.log('IntakeController loaded');

    var intake = this;


    this.postStudent = function(firstname, lastname, age, dob, insurance, medical, appointment, primarylanguage, concerns_id) {
        console.log('inside postStudent');
        intake.dob = new Date;
        intake.studentdata = {
            firstname: firstname,
            lastname: lastname,
            age: age,
            dob: dob,
            insurance: insurance,
            medical: medical,
            appointment: appointment,
            primarylanguage: primarylanguage,
            concerns_id: concerns_id
        };
        console.log(intake.studentdata);
        intakeService.postStudent(intake.studentdata).then(function(response) {
            console.log("response", response);
        });
    }; //end of postStudent


//     this.postConcerns = function(firstname, age, language, articulation, pragmatics, fluency, voice) {
//         console.log('inside postConcerns');
//         intake.studentconcerns = {
//
//             firstname: firstname,
//             age: age,
//             students_id: students_id,
//             concerns_id: concerns_id
//         };
// console.log("intake student concerns", intake.studentconcerns);
// intakeService.postConcerns(intake.studentconcerns).then(function(response) {
//     console.log("response from post concerns", response);
// });
//     }; //end of postConcerns






}

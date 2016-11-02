angular.module('speechApp')
    .controller('IntakeController', IntakeController);

function IntakeController(intakeService) {
    console.log('IntakeController loaded');
    var intake = this;

    intake.object = {};
    intake.array = [];
    intake.studentdata = {};

    this.postStudent = function(firstname, lastname, age, dob, insurance, medical, appointment, primarylanguage) {
        console.log('inside postStudent');
        intake.studentdata = {
            firstname: firstname,
            lastname: lastname,
            age: age,
            dob: dob,
            insurance: insurance,
            medical: medical,
            appointment: appointment,
            primarylanguage: primarylanguage
        };
        console.log(intake.studentdata);
        intakeService.postStudent(intake.studentdata).then(function(response) {
            console.log("response", response);
        });
    }; //end of postStudent
}

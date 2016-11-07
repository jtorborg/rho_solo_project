angular.module('speechApp')
    .controller('IntakeController', IntakeController);

function IntakeController(intakeService) {
    console.log('IntakeController loaded');

    var intake = this;
    intake.Array = [];


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


    this.getStudents = function() {
        console.log('inside getStudents');
        intakeService.getStudents().then(function(response) {
            console.log("response from get students", response);
            intake.Array = response.data;
            console.log("intake array", intake.Array);

        });
    }; //end of getStudents






}

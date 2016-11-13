angular.module('speechApp')
    .controller('IntakeController', IntakeController);

function IntakeController(intakeService, $filter) {
    console.log('IntakeController loaded');

    var intake = this;
    intake.Array = [];
    intake.dob;
    console.log('intake.dob', intake.dob);
    intake.agetoday;
    // console.log(intake.agetoday);


    this.postStudent = function(firstname, lastname, age, dob, doc, insurance, medical, appointment, appointmentcomplete, primarylanguage, concerns_id, notes, mondaymorning, mondayafternoon, mondayevening, tuesdaymorning, tuesdayafternoon, tuesdayevening, wednesdaymorning, wednesdayafternoon, wednesdayevening, thursdaymorning, thursdayafternoon, thursdayevening, fridaymorning, fridayafternoon, fridayevening) {
        console.log('inside postStudent');
        intake.dob = new Date;
        intake.studentdata = {
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
            concerns_id: concerns_id,
            notes: notes,
            mondaymorning: mondaymorning,
            mondayafternoon: mondayafternoon,
            mondayevening: mondayevening,
            tuesdaymorning: tuesdaymorning,
            tuesdayafternoon: tuesdayafternoon,
            tuesdayevening: tuesdayevening,
            wednesdaymorning: wednesdaymorning,
            wednesdayafternoon: wednesdayafternoon,
            wednesdayevening: wednesdayafternoon,
            thursdaymorning: thursdaymorning,
            thursdayafternoon: thursdayafternoon,
            thursdayevening: thursdayevening,
            fridaymorning: fridaymorning,
            fridayafternoon: fridayafternoon,
            fridayevening: fridayevening
        };
        console.log(intake.studentdata);
        intakeService.postStudent(intake.studentdata).then(function(response) {
            console.log("response", response);
        });
    }; //end of postStudent


    intake.calcAge = function(dob) {
        console.log('inside calc age');
        console.log(intake.dob);
        var bday = $filter('date')(intake.dob, 'yyyy/MM/dd');
        console.log(bday);


        var today = new Date();
        var birthDate = new Date(bday);
        var agetoday = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            agetoday--;

        }
        console.log("age today", agetoday);
        intake.agetoday = agetoday;
        return intake.agetoday;

    }




}

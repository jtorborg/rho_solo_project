angular.module('speechApp')
.controller('IntakeController', IntakeController);

function IntakeController($location) {
  console.log('IntakeController loaded');
  var ctrl = this;

  ctrl.intake = {
    console.log('inside ctrl intake function');
  }
//CRUD requests to /intake
}

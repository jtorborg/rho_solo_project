angular.module('speechApp')
.controller('HomeController', HomeController);

function HomeController($http, $location) {
  console.log('HomeController loaded');
  var ctrl = this;

  ctrl.home = {
    name: name
  }

    ctrl.oneAtATime = true;

    ctrl.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];

    ctrl.items = ['Item 1', 'Item 2', 'Item 3'];

    ctrl.addItem = function() {
      var newItemNo = ctrl.items.length + 1;
    ctrl.items.push('Item ' + newItemNo);
    };

    ctrl.status = {
      isCustomHeaderOpen: false,
      isFirstOpen: true,
      isFirstDisabled: false
    };


}

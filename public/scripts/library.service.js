angular.module('speechApp').service('libraryService', libraryService);

var ctrl = this;

function libraryService($http) {
    this.getLibrary = function() {
            return $http.get('/library').then(function(response) {
                console.log('response', response);
                return response; //!!!!!!!!!!
            });

        } //end of getLibrary
        //getLibrary();


        this.checkoutTest = function(libraryid) {
          console.log('libraryid', libraryid);
            return $http.put('/library/' + libraryid).then(function(status) {

                return libraryid;
            })
        }





} //end of libraryService

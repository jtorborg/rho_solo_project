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


        this.checkoutTest = function(librarytestStatus) {
          console.log('library.testStatus,libraryid', librarytestStatus);
            return $http.put('/library/' + librarytestStatus.libraryid, librarytestStatus).then(function(status) {

                return librarytestStatus;
            })
        }





} //end of libraryService

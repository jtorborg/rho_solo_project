angular.module('speechApp').service('libraryService', libraryService);

var ctrl = this;

function libraryService($http) {
  this.getLibrary = function() {
       return $http.get('/library').then(function(response) {
             console.log('response', response);
               return response;  //!!!!!!!!!!
           });

} //end of getLibrary
//getLibrary();

}//end of libraryService

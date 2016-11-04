angular.module('speechApp')
    .controller('LibraryController', LibraryController);

function LibraryController(libraryService) {
    console.log('LibraryController loaded');
    var library = this;
    library.Object = {};
    library.Array = [];
    // ctrl.library = {
    //   name: name
    // }
    //get request to /library

    library.getLibrary = function() {
        console.log('inside getLibrary');

        libraryService.getLibrary().then(function(response) {
            console.log("response", response);;

            library.Object = response;
            library.Array = response.data;
            console.log("library array", library.Array);
        });

    }

    library.checkoutTest = function(libraryid, libraryavail) {
        console.log('change availability');
        console.log("libraryid", libraryid);

        library.testStatus = {
        libraryid: libraryid,
        libraryavail: libraryavail
         };
        console.log('library id', libraryid);
        console.log('library avail', libraryavail);
        console.log('library test status', library.testStatus);


        libraryService.checkoutTest(library.testStatus).then(function(response) {

          library.getLibrary();
            console.log("response", response);
        });

    }

}

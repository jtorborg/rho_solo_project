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

    library.checkoutTest = function(libraryid) {
        console.log('change availability');
        console.log("libraryid", libraryid);

        // console.log("available", available);
        // library.testStatus = {
        //     id: id
        // };
        console.log('library id', libraryid);
        libraryService.checkoutTest(libraryid).then(function(response) {

          library.getLibrary();
            console.log("response", response);
        });

    }

}

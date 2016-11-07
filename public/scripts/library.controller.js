angular.module('speechApp')
    .controller('LibraryController', LibraryController);

function LibraryController(libraryService) {
    console.log('LibraryController loaded');
    var library = this;
    library.Object = {};
    library.Array = [];
    library.Answer = "yes";

    if (library.available == true) {
        library.Answer = "yes"
    } else {
        library.Answer = "no";
}
      console.log('library answer', library.Answer);
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

        library.checkoutTest = function(libraryid, libraryavail, librarycomments) {
            console.log('change availability');
            console.log("libraryid", libraryid);
            console.log("librarycomments", librarycomments);


            library.testStatus = {
                libraryid: libraryid,
                libraryavail: libraryavail,
                librarycomments: librarycomments

            };
            console.log('library id', libraryid);
            console.log('library avail', libraryavail);
            console.log("librarycomments", librarycomments);

            console.log('library test status', library.testStatus);


            libraryService.checkoutTest(library.testStatus).then(function(response) {

                library.getLibrary();
                console.log("response", response);
            });

        }

    }

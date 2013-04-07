

angular.module('notesFilters', []).
    filter('getNoteById', function () {
        return function (notes, id) {
            for (var i = 0; i < notes.length; i++) {
                if (notes[i].Id == id)
                    return notes[i];
            }
        };
    });
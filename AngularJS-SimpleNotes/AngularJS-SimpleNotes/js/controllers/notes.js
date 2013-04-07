function NotesCtrl($scope, Note) {
    // properties
    $scope.notes = function () {
        toastr.info('Retrieving notes')
        return Note.query(function () {
            toastr.success('Notes was successfully retrieved');
        }, function () {
            toastr.error('Something went wrong during retrieving notes. Check your internet connection and try to refresh the app.');
        });
    }();

    // computed properties
    $scope.remainedNotes = function () {
        var count = 0;
        angular.forEach($scope.notes, function (note) {
            count += note.Done ? 0 : 1;
        });
        return count;
    }

    // behaviors
    $scope.remove = function (note) {
        Note.remove({ id: note.Id }, function () {
            toastr.success('Note was successfully removed');
            var index = $scope.notes.indexOf(note);
            $scope.notes.splice(index, 1);
        }, function () {
            toastr.error('Something went wrong during note removing. Please try again.');
        });
    }

    $scope.removeAll = function () {
        Note.removeAll(function () {
            toastr.success('Notes was successfully removed');
            $scope.notes = [];
        }, function () {
            toastr.error('Something went wrong during notes removing. Please try again.');
        });

    }

    $scope.isDone = function (note) {
        Note.update({ id: note.Id }, note, function () {
            if(note.Done)
                toastr.success('Congrats! "' + note.Title + '" is done!');
            else
                toastr.warning('"' + note.Title + '" back to your list');
        }, function () {
            toastr.error('Something went wrong during note updating. Please try again.');
        });
    }
}
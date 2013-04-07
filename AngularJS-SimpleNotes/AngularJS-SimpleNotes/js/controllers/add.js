function AddCtrl($scope, $location, Note) {
    $scope.note = {
        Title: '',
        Content: '',
        Done: false,
        Id: 0
    };


    $scope.save = function () {
        Note.add($scope.note, function () {
            toastr.success('New note added successfully');
            $scope.notes.push($scope.note);
            $location.path('/');
        }, function () {
            toastr.error('Something went wrong during adding new note. Please try again.');
        });
    }
}
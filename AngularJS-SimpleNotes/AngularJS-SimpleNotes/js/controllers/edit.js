function EditCtrl($scope, $location, $filter, $routeParams, Note) {
    $scope.note = $filter('getNoteById')($scope.notes, $routeParams.id);


    $scope.save = function () {
        Note.update({ id: $scope.note.Id }, $scope.note, function () {
            toastr.success('Changes was successfully saved');
            $location.path('/');
        }, function () {
            toastr.error('Something went wrong during saving cahnges. Please try again.');
        });
    }
}
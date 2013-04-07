

angular.module('simple-notes', ['notesServices', 'notesFilters']).
  config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
          when('/notes', { templateUrl: 'partials/notes.html' }).
          when('/notes/add', { templateUrl: 'partials/add.html', controller: AddCtrl }).
          when('/notes/edit/:id', { templateUrl: 'partials/add.html', controller: EditCtrl }).
          when('/notes/details/:id', { templateUrl: 'partials/details.html', controller: EditCtrl }).
          otherwise({ redirectTo: '/notes' });
  }]);


angular.module('notesServices', ['ngResource']).
    factory('Note', function ($resource) {
        return $resource('/api/notes/:id', { id: '@id' },
            {
                query: { method: 'GET', isArray: true },
                add: { method: 'POST' },
                update: { method: 'PUT' },
                remove: { method: 'DELETE' },
                removeAll: { method: 'DELETE', params: { id: -1 } }
            });
    });
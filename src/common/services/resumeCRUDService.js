"use strict";

/**
 * @ngdoc service
 * @name resumeWrangler.resumeCRUDService
 * @description Create,Read,Update,Delete service for resume JSON from backend.
 */
angular.module('resumeWrangler')
  .service('resumeCRUDService', function($rootScope, $http) {
    var service = {};

    /**
     * Get summary list of all resumes
     * @returns {promise}
     */
    service.fetchResume = function(id) {
      return $http.get('http://private-b7b35-avalonresumesearch.apiary-mock.com/api/resumes/' + id);
    };

    return service;
  });

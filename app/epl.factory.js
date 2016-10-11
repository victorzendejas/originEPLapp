(function() {
    'use strict';

    angular
        .module('app')
        .factory('EPLFactory', EPLFactory);

    EPLFactory.$inject = ['$http'];

    /* @ngInject */
    function EPLFactory($http) {
        var service = {
            getEPL: getEPL,
            getEPLfixtures: getEPLfixtures,
            getEPLresults: getEPLresults

        };
        return service;


        ////////////////

         function getEPL() {

     		return $http({
      			method: 'GET',
     			url: 'http://soccer.sportsopendata.net/v1/leagues/premier-league/seasons/16-17/standings'
     		}).then(function(response){

      			return response.data;

			 });
         }

         function getEPLfixtures() {

     		return $http({
      			method: 'GET',
     			url: 'http://soccer.sportsopendata.net/v1/leagues/premier-league/seasons/16-17/rounds/giornata-8'
     		}).then(function(response){

      			return response.data;

			 });
         }

         function getEPLresults() {

     		return $http({
      			method: 'GET',
     			url: 'http://soccer.sportsopendata.net/v1/leagues/premier-league/seasons/16-17/rounds/giornata-7'
     		}).then(function(response){

      			return response.data;

			 });
         }


    }
})();
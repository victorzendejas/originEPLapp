(function() {
    'use strict';

    angular
        .module('app')
        .controller('EPLController', EPLController);

    EPLController.$inject = ['$http', 'EPLFactory'];

    /* @ngInject */
    function EPLController($http, EPLFactory) {
        var vm = this;
        vm.title = 'EPLController';
       	vm.showStandings = false;
       	vm.showHome = true;
       	vm.showFixtures = false;
       	vm.showResults = false;
    

       	activate();

        ////////////////

        function activate() { 

        	 EPLFactory.getEPL().then(function(result){

        		vm.EPLstandings = result.data.standings; // <<< this grabs all the teams from data

        	 });

        	
        	 EPLFactory.getEPLfixtures().then(function(result){

        	 	vm.EPLfixtures = result.data.rounds[0].matches;
        	 });

        	
        	 EPLFactory.getEPLresults().then(function(result){

        	 	vm.EPLresults = result.data.rounds[0].matches;
        	 });
			
		};
  	



        

        }
})();
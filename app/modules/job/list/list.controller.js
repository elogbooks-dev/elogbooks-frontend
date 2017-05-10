(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('JobListController', ['jobCollectionResponse', JobListController]);

    function JobListController(jobCollectionResponse) {
        var vm = this;
        vm.jobCollection = jobCollectionResponse;
    }
})();

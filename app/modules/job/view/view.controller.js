(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('JobViewController', ['jobResponse', JobViewController]);

    function JobViewController(jobResponse) {
        var vm = this;
        vm.job = jobResponse;
    }
})();

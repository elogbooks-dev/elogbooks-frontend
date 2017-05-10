(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('JobCreateController', ['$http', '$state', JobCreateController]);

    function JobCreateController($http, $state) {
        var vm = this;
        vm.job = {
            description : null
        };
        vm.create = create;

        function create() {
            $http.post(
                'http://localhost:8001/job',
                vm.job
            ).then(function (response) {
                $state.go('jobs.view', {id:response.data.id});
            }, function () {
                console.log('Request Failed');
            });
        }
    }
})();

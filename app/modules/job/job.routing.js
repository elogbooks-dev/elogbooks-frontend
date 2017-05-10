(function (){
    'use strict';

    angular
        .module('elogbooks.job', [])
        .config(registerRoutes);

    function registerRoutes($stateProvider) {
        $stateProvider
            .state('jobs', {
                abstract: true,
                url: '/jobs',
                template: '<ui-view/>'
            })
            .state('jobs.list', {
                url: '/list',
                controller: 'JobListController',
                controllerAs: 'vm',
                templateUrl: 'modules/job/list/list.html',
                resolve: {
                    jobCollectionResponse : function ($http) {
                        return $http({
                            url: 'http://localhost:8001/job',
                            method: "GET",
                            params: {}
                        }).then(function (response) {
                            return response.data;
                        }, function () {
                            console.log('Request Failed');
                        });
                    }
                }
            })
            .state('jobs.create', {
                url: '/create',
                controller: 'JobCreateController',
                controllerAs: 'vm',
                templateUrl: 'modules/job/create/create.html',
            })
            .state('jobs.view', {
                url: '/view/{id}',
                controller: 'JobViewController',
                controllerAs: 'vm',
                templateUrl: 'modules/job/view/view.html',
                resolve: {
                    jobResponse : function ($http, $stateParams) {
                        return $http({
                            url: 'http://localhost:8001/job/' + $stateParams.id,
                            method: "GET"
                        }).then(function (response) {
                            return response.data;
                        }, function () {
                            console.log('Request Failed');
                        });
                    }
                }
            })
    }
})();
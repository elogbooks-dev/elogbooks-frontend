(function (){
    'use strict';

    angular
        .module('elogbooks.quote', [])
        .config(registerRoutes);

    function registerRoutes($stateProvider) {
        $stateProvider
            .state('quotes', {
                abstract: true,
                url: '/quotes',
                template: '<ui-view/>'
            })
            .state('quotes.list', {
                url: '/list',
                controller: 'QuoteListController',
                controllerAs: 'vm',
                templateUrl: '/modules/quote/list/list.html',
                resolve: {
                    quoteCollectionResponse : function () {
                        return [
                            { id:1, description: 'Carpet deep clean' },
                            { id:2, description: 'New carpet in reception' },
                            { id:3, description: 'New entrance doors' },
                            { id:4, description: 'Fixing toilet leak' },
                            { id:5, description: 'New parts required for boiler' },
                            { id:6, description: 'New office equipment' }
                        ]
                    }
                }
            })
    }
})();
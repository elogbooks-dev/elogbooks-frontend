(function () {
    'use strict';

    angular
        .module('elogbooks.quote')
        .controller('QuoteListController', ['quoteCollectionResponse', QuoteListController]);

    function QuoteListController(quoteCollectionResponse) {
        var vm = this;
        vm.quoteCollection = quoteCollectionResponse;
    }
})();

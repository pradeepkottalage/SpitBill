var app = angular.module('demo', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/friendsList');
    $stateProvider
       .state('friendsList', {
           url: '/friendsList',
           templateUrl: 'Views/friendsList.html',
           controller: 'friendsListCtrl'
       }).state('billsList', {
        url: '/billsList',
        templateUrl: 'Views/billsList.html',
        controller: 'billsListCtrl'
    })
}]);


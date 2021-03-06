/**
 * Created by Amit Thakkar on 9/26/15.
 */
((ng) => {
    'use strict';
    let dynamicMongooseSchema = ng.module('dynamicMongooseSchema', ['ui.bootstrap', 'ngTagsInput', 'ngNewRouter']);
    dynamicMongooseSchema.controller('MasterController', ['$router', '$rootScope', function ($router, $scope) {
        var master = this;
        $router.config([
            {path: '/', redirectTo: '/schema-list'},
            {path: '/schema-list', component: 'schemaList'},
            {path: '/schema-add', component: 'schemaAdd'},
            {path: '/api-list', component: 'apiList'},
            {path: '/api-add', component: 'apiAdd'},
            {path: '/api-view/:_id', component: 'apiView'},
            {path: '/api-edit/:_id', component: 'apiEdit'},
            {path: '/module-list', component: 'moduleList'},
            {path: '/module-add', component: 'moduleAdd'},
            {path: '/module-edit/:_id', component: 'moduleEdit'}
        ]);
        $scope.setTitleAndPageProperty = function (title, page) {
            master.title = title;
            master.page = page;
        };
    }])
})(angular);
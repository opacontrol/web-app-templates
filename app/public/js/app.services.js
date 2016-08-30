"use strict"

angular
    .module("templateApp")

    /**
     * Factory object used to interface with nodeJS server
     */
    .factory("TemplateFactory", function($http, $q){
        var Template = {};

        Template.getAllTemplates = function () {
            return $http.get("/templates")
            .then(function (result) {
                return result;
            }, function (error) {
                $q.reject(error);
            });
        };

        return Template;
    });
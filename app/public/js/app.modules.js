"use strict"

angular
    /**
     * Definition of the application singleton
     */
    .module("templateApp", [])

    /**
     * Main controller
     */
    .controller("mainCtrl", function($scope, TemplateFactory) {
        let all = {};

        function init() {
            TemplateFactory.getAllTemplates()
                .then(function(result) {
                    if (result.status == 200) {
                        all = result.data;
                    } else {
                        all = {};
                    }
                    console.log(all);
            });
        };

        // Call init
        init();
    });

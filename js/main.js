/**
 * Created by schien on 09/11/2013.
 */
/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        },
        jquery: {
            exports: '$'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
//        backboneLocalstorage: '../bower_components/backbone.localStorage/backbone.localStorage',
        text: '../bower_components/requirejs-text/text'
    }
});

require([
    'backbone',
    'views/app',
], function (Backbone, AppView) {
    /*jshint nonew:false*/


    // Initialize the application view
    new AppView();
});
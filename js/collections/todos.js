/**
 * Created by schien on 10/11/2013.
 */
define(['backbone', 'models/todo'],function(Backbone, Todo){
    'use strict';
    var Todo = Backbone.Collection.extend({
        model : Todo
    });

    return Todo;

})
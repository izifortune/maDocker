/*global dockerApp, Backbone*/

dockerApp.Routers = dockerApp.Routers || {};

(function () {
    'use strict';

    dockerApp.Routers.MainRouter = Backbone.Router.extend({

        routes: {
            "dockerps": "dockerps",
            "dockerimages": "dockerImages",
        },

        dockerps: function () {
            console.log('dockerps');
        },

        dockerImages: function () {
            console.log('dockerImages');
        }
    });

})();

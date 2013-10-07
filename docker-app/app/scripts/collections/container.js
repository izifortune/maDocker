/*global dockerApp, Backbone*/

dockerApp.Collections = dockerApp.Collections || {};

(function () {
    'use strict';

    dockerApp.Collections.ContainerCollection = Backbone.Collection.extend({

        model: dockerApp.Models.ContainerModel,

        url: 'http://localhost:3000/dockerps'
    });

})();

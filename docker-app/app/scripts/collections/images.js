/*global dockerApp, Backbone*/

dockerApp.Collections = dockerApp.Collections || {};

(function () {
    'use strict';

    dockerApp.Collections.ImagesCollection = Backbone.Collection.extend({

        model: dockerApp.Models.ImagesModel,

        url: 'http://localhost:3000/dockerimages/list/',

        initialize: function () {
            this.on('invalid', function(model, error) {
                console.log(error);
            });
        }

    });

})();

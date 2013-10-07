/*global dockerApp, Backbone, JST*/

dockerApp.Views = dockerApp.Views || {};

(function () {
    'use strict';

    dockerApp.Views.DockerpsView = Backbone.Marionette.CompositeView.extend({

        template: JST['app/scripts/templates/dockerps.ejs'],

        itemViewContainer: '.ps-container',

        itemView: dockerApp.Views.DockerpsItemView,

        onBeforeRender: function() {
            this.collection.fetch();
        }
    });

})();

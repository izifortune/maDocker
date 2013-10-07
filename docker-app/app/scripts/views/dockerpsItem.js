/*global dockerApp, Backbone, JST*/

dockerApp.Views = dockerApp.Views || {};

(function () {
    'use strict';

    dockerApp.Views.DockerpsItemView = Backbone.Marionette.ItemView.extend({

        tagName: 'tr',

        template: JST['app/scripts/templates/dockerpsItem.ejs'],

        events: {
            'click .remove': 'stopContainer',
        },

        stopContainer: function () {
            this.model.destroy({wait: true});
            this.$el.addClass('danger');
            this.$('.controls').text("Stopping...");
        }

    });

})();

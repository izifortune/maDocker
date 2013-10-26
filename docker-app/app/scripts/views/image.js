/*global dockerApp, Backbone, JST*/

dockerApp.Views = dockerApp.Views || {};

(function () {
    'use strict';

    dockerApp.Views.ImageView = Marionette.CompositeView.extend({

        template: JST['app/scripts/templates/image.ejs'],

        itemViewContainer: '.ps-container',

        itemView: dockerApp.Views.ImageItemView,

        onBeforeRender: function() {
            this.collection.fetch({validate: true});
            console.log(this.collection);
        }
    });

})();

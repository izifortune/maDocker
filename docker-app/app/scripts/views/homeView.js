dockerApp.Views = dockerApp.Views || {};

(function() {
    'use strict';

    dockerApp.Views.HomeView = Backbone.Marionette.ItemView.extend({

        template: JST['app/scripts/templates/homeView.ejs']

    });

})();

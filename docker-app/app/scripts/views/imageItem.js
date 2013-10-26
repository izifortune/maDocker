/*global dockerApp, Backbone, JST*/

dockerApp.Views = dockerApp.Views || {};

(function () {
    'use strict';

    dockerApp.Views.ImageItemView = Marionette.ItemView.extend({

        tagName: 'tr',

        template: JST['app/scripts/templates/imageItem.ejs'],

        events: {
            'click .start': 'startImage',
        },

        onRender: function () {
            console.log('render item');
        },

        startImage: function () {
            var self = this;
            //this.model.destroy({wait: true});
            //url: 'http://localhost:3000/dockerimages/list/'
            this.$el.addClass('success');
            this.$('.controls').text("Starting...");
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/dockerimages",
                dataType: "json",
                data: {id: this.model.get('repository')},
                success: function(data) {
                    if (data) {
                        self.$el.removeClass('success');
                        this.$('.controls').text("Start");
                    }
                }
            });
        }

    });

})();

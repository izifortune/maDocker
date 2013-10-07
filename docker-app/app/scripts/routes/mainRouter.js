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
            console.log(dockerApp);
            var list = new dockerApp.Collections.ContainerCollection();
            var dpsView = new dockerApp.Views.DockerpsView({
                collection: list,
            });
            $('.app-container').html(dpsView.render().el);
        },

        dockerImages: function () {
            console.log('dockerImages');
        }
    });

})();

/*global dockerApp, $*/


window.dockerApp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        new window.dockerApp.Routers.MainRouter();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    dockerApp.init();
});

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
        $('#mainnav li').on('click', function (e) {
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');
            console.log('asd');
        })
    }
};

$(document).ready(function () {
    'use strict';
    dockerApp.init();
});

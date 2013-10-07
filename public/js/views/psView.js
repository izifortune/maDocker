var PSView = Backbone.Marionette.ItemView.extend({

    template: [],

    events: {
        'click .icon-stop': 'stopContainer'
    },

    stopContainer: function (e) {
        //TODO Invocare lo stop POST?
        //$.post('/dockerstop');
    }

});

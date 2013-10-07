var PSView = Backbone.Marionette.ItemView.extend({

    template: [],

    events: {
        'click .icon-run': 'runContainer'
    },

    runContainer: function (e) {
        //TODO Invocare lo stop POST?
        //$.post('/dockerstop');
    }

});

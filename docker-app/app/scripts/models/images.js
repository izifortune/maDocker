/*global dockerApp, Backbone*/

dockerApp.Models = dockerApp.Models || {};

(function () {
    'use strict';

    dockerApp.Models.ImagesModel = Backbone.Model.extend({

        validate: function (attrs) {
            console.log(attrs);
            if (!attrs.repository || attrs.repository === '<none>'
                || attrs.repository === ''
               ) {
                return "Repository is null";
            }
            if (!attrs.tag || attrs.tag === '<none>') {
                return "Tag is null";
            }
        }
    });

})();

var Emberapp = window.Emberapp = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
require('scripts/auth/*');

DS.RESTAdapter.reopen({
    host: 'http://webservices.ftv-local.fr/tools',
    ajax: function(url, type, hash) {
        hash.url = url;
        hash.type = type;
        hash.dataType = 'jsonp';
        hash.contentType = 'application/json; charset=utf-8';
        hash.context = this;

        if (hash.data && type !== 'GET') {
            hash.data = JSON.stringify(hash.data);
        }
        return jQuery.ajax(hash);
    }
});